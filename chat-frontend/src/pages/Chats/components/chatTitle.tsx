import { Typography, Box } from "@mui/material";
import * as React from "react";
import { useState } from "react";


type titleType = {
  name: string;
  date: Date;
}


const ChatTitle = (props: titleType): JSX.Element => {

  const { name, date } = props;


  return (

    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>{name}</Typography>
      <Typography>{date.toLocaleDateString()}</Typography>
    </Box>
  );
};

export default ChatTitle;
