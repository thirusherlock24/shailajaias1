import React, { useState, useEffect, useCallback } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { Grid, Typography, Paper, IconButton, Box} from '@mui/material';
import { InsertDriveFile } from '@mui/icons-material';

const RetrieveFolders = ({folderName,type}) => {
  const [folderStructure, setFolderStructure] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const listFolderStructure = useCallback(async (ref) => {
    try {
      const res = await ref.listAll();
      const items = await Promise.all(
        res.items.map(async (itemRef) => {
          if (itemRef.isDirectory) {
            console.log(`Found folder: ${itemRef.name}`);
            return { name: itemRef.name, type: 'folder' };
          } else {
            console.log(`Found file: ${itemRef.name}`);
            return { name: itemRef.name, type: 'file', url: await itemRef.getDownloadURL() };
          }
        })
      );
      return items;
    } catch (error) {
      console.error('Error retrieving folder structure:', error);
      throw error;
    }
  }, []);

  const hasDirectory = useCallback(async (storageRef, directoryPath) => {
    const directoryRef = storageRef.child(directoryPath);
    try {
      await directoryRef.listAll();
      return true; // Directory exists
    } catch (error) {
      if (error.code === 'storage/object-not-found') {
        console.log("yes false");
        return false; // Directory does not exist

      } else {
        console.error('Error checking directory:', error);
        throw error;
      }
    }
  }, []);

  useEffect(() => {
    if (!folderName) {
      // Handle the case when folderName is null or undefined
      return;
    }
  
    const fetchFolderStructure = async () => {
      try {
        const storage = firebase.storage();
        const storageRef = storage.ref().child(`${type}${folderName}`); // Reference to the 'documents' folder

        console.log("Retrieving folder structure...");

        const folderExists = await hasDirectory(storageRef, folderName);
        if (!folderExists) {
          setLoading(false);
          return;
        }

        const folderStructure = await recursiveListFolderStructure(storageRef);
        console.log("Retrieved folder structure:", folderStructure);
        setFolderStructure(folderStructure);
        setLoading(false);
      } catch (error) {
        console.error('Error retrieving folder structure:', error);
        setError(error.message || 'Error retrieving folder structure');
        setLoading(false);
      }
    };

    const recursiveListFolderStructure = async (ref) => {
      const items = await listFolderStructure(ref);
      const folders = await Promise.all(items.filter(item => item.type === 'folder').map(async folder => {
        const children = await recursiveListFolderStructure(ref.child(folder.name));
        return { ...folder, children };
      }));
      return [...items.filter(item => item.type === 'file'), ...folders];
    };

    fetchFolderStructure();
  }, [listFolderStructure, hasDirectory,folderName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div
  
  >
    <Box display="flex" justifyContent="center" p={2}>
      <Grid container spacing={1} justifyContent="center">
        {folderStructure.map((file, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box
              border={1}
              borderColor="primary.main"
              borderRadius={5}
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: 1 }}
            >
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', flex: 1 }}
              >
                <Paper elevation={0} style={{ padding: '10px', textAlign: 'center', cursor: 'pointer' }}>
                  <IconButton>
                    <InsertDriveFile fontSize="large" />
                  </IconButton>
                  <Typography variant="subtitle1">{file.name}</Typography>
                </Paper>
              </a>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </div>
  
  );
};

export default RetrieveFolders;
