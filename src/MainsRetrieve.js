import React, { useState } from "react";
import { Box } from "@mui/material";
import Folder from "@mui/icons-material/Folder";
import RetrieveFolders from "./RetrieveFolders.js";

const MainsRetrieve = () => {
  const [activeFolder, setActiveFolder] = useState("Essay");
  const folders = ["Essay", "GS-1", "GS-2", "GS-3", "GS-4"]; // Add folder names here

  const handleClick = (folder) => {
    setActiveFolder(folder);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}
    >
      <Box p={2} textAlign="center">
        <div
          style={{ color: "black", fontSize: "20px" }}
          className="text-black text-lg font-bold"
        >
          Mains Current Affairs
        </div>
      </Box>
      <Box p={1} semi-bold textAlign="center">
        <h1 style={{ color: "black" }}>
          <strong>(Click folders to access)</strong>
        </h1>
      </Box>
      <Box display="flex" justifyContent="center" p={2}>
        {folders.map((folder, index) => (
          <div
            key={index}
            onClick={() => handleClick(folder)}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              color: activeFolder === folder ? "#0e85d1" : "#34495E", // Change color based on active folder
            }}
          >
            <Folder style={{ marginRight: "5px" }} />
            <span style={{ color: "brown" }} className="whitespace-nowrap">
              {folder}
            </span>
          </div>
        ))}
      </Box>
      <Box
        p={2}
        style={{
          border: "3px solid #f49586",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: "100vh",
        }}
      >
        {activeFolder && (
          <RetrieveFolders folderName={activeFolder} type={"Mains/"} />
        )}
      </Box>
    </div>
  );
};

export default MainsRetrieve;
