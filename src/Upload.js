import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Adjusted import statement
import 'firebase/compat/storage'; // Import storage module separately if needed

const UploadDocument = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`documents/${file.name}`).put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress
      },
      (error) => {
        // Handle error
      },
      () => {
        // Handle successful upload
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadDocument;
