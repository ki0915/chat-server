import { Typography, Box } from "@mui/material";
import * as React from "react";
import { useState } from "react";


type titleType = {
  id: string;
}


const ChatTitle = (props: titleType): JSX.Element => {

  const { id } = props;


  return (

    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>{id}</Typography>
    </Box>
  );
};

export default ChatTitle;