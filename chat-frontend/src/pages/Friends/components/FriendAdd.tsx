import {
  Container,
  Grid,
  IconButton,
  List,
  TextField,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListItem,
  Avatar,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import { useState, ChangeEvent } from "react";
import axios from "axios";
import { computeHeadingLevel } from "@testing-library/react";

type SearchResultType = {
  id: number;
  name: string;
  statusMessage: string;
};

type FriendAddType = {
  callback: () => void;
};

const FriendAdd = (props: FriendAddType): JSX.Element => {
  const { callback } = props;
  const [phone, setphone] = useState<string>("");
  const [user, setUser] = useState<SearchResultType>();

  const updatePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    setphone(inputText);
  };

  const addUser = async () => {
    try {
      await axios.post("http://localhost:5000/friends", { userId: 1, phone });
      await callback();
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        const { data } = e.response;
        if (data) {
          alert(data.message);
        }
      }
    }
  };

  const searchUser = async () => {
    const { data } = await axios.get<SearchResultType>(
      "http://localhost:5000/friends/search",
      {
        params: {
          phone,
        },
      }
    );

    setUser(data);
  };

  return (
    <Container sx={{ p: 5 }}>
      <Box sx={{ background: "#f3f3f3", p: 3, borderRadius: "10px" }}>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              fullWidth
              label="전화번호"
              value={phone}
              onChange={updatePhone}
            />
          </Grid>
          <Grid item xs={1.5}>
            <IconButton sx={{ p: 2 }} onClick={searchUser}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
        <List>
          {user && (
            <ListItem
              secondaryAction={
                <IconButton onClick={addUser}>
                  <PersonAddIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={user.statusMessage}
              />
            </ListItem>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default FriendAdd;
