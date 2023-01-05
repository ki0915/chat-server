import * as React from "react";
import { Box, Chip, Typography } from "@mui/material";

type ChatLastestStatusType = {
  message: string;
  count?: number;
};
const ChatLastestStatus = (props: ChatLastestStatusType): JSX.Element => {
  const { message, count } = props;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>{message}</Typography>
      <Chip color="error" label={count} />
    </Box>
  );
};

export default ChatLastestStatus;
