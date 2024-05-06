import React, { useState, useEffect, useCallback } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { Grid, Typography, Paper, IconButton, Box} from '@mui/material';
import { InsertDriveFile } from '@mui/icons-material';

const RetrieveFolders = ({ folderName }) => {
  const [fileStructure, setFileStructure] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const listFileStructure = useCallback(async (ref) => {
    try {
      const res = await ref.listAll();
      const files = res.items.filter(item => !item.isDirectory);
      return Promise.all(files.map(async (fileRef) => {
        console.log(`Found file: ${fileRef.name}`);
        // Get metadata to access timestamp
        const metadata = await fileRef.getMetadata();
        // Ensure metadata.timeCreated is a valid timestamp string
        const timestampString = metadata.timeCreated;
        const timestamp = Date.parse(timestampString); // Parse timestamp string to number
        // Check if timestamp is a valid number
        if (!isNaN(timestamp)) {
          return { name: fileRef.name, url: await fileRef.getDownloadURL(), timestamp };
        } else {
          console.error(`Invalid timestamp: ${timestampString}`);
          throw new Error('Invalid timestamp');
        }
      }));
    } catch (error) {
      console.error('Error retrieving file structure:', error);
      throw error;
    }
  }, []);
  

  useEffect(() => {
    if (!folderName) {
      // Handle the case when folderName is null or undefined
      return;
    }

    const fetchFileStructure = async () => {
      try {
        const storage = firebase.storage();
        const storageRef = storage.ref().child(`documents/${folderName}`);
    
        console.log("Retrieving file structure...");
    
        const fileStructure = await listFileStructure(storageRef);
        // Sort files based on timestamp
        console.log("Timestamp types:", fileStructure.map(file => typeof file.timestamp));
        console.log("Timestamp values and types:", fileStructure.map(file => ({ value: file.timestamp, type: typeof file.timestamp })));

        console.log("File structure before sorting:", fileStructure);
        fileStructure.sort((a, b) => b.timestamp - a.timestamp);
        console.log("File structure after sorting:", fileStructure);        console.log("Retrieved file structure:", fileStructure);
        setFileStructure(fileStructure);
        setLoading(false);
      } catch (error) {
        console.error('Error retrieving file structure:', error);
        setError(error.message || 'Error retrieving file structure');
        setLoading(false);
      }
    };
    

    fetchFileStructure();
  }, [folderName, listFileStructure]);

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
        {fileStructure.map((file, index) => (
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
