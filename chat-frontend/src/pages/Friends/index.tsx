import {
  Avatar,
  Container,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Box,
  TextField,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { ChangeEvent, useState, useEffect, MouseEvent } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import FriendAdd from "./components/FriendAdd";
import Modal from "@mui/material/Modal";
import * as React from "react";
import axios from "axios";
import { NoSubstitutionTemplateLiteral } from "typescript";

type FriendType = {
  id: number;
  name: string;
  statusMessage: string;
};

type ChatType ={
  chatId: number;
};

type FriendTabType = {
  changeTab: (chatId: number) => void;
};

const Friends = (props: FriendTabType): JSX.Element => {
  const {changeTab} = props;
  const [open, setOpen] = useState(false);
  const [originalFriends, setOriginalFriends] = useState<FriendType[]>([]);
  const [friendList, setFriendList] = useState<FriendType[]>([]);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const [friend, setfriend] = useState<number | null>(null);


  const Search_friend = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.currentTarget.value;

    if (search.length === 0) {
      setFriendList(originalFriends);
    }
    const filteredFriends = originalFriends.filter((friend) => {
      console.log(friend);
      return friend.name.includes(search);
    });

    setFriendList(filteredFriends);
  };


  const finishAddFriend = async () => {
    await getFriendList();
    closeModal();
  };
  const getFriendList = async () => {
    const { data } = await axios.get<FriendType[]>(
      "http://localhost:5000/friends"
    );

    setFriendList(data);
    setOriginalFriends(data);
  };

  useEffect(() => {
    getFriendList();
  }, []);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const openMenu = (event: MouseEvent<HTMLDivElement>) => {
    setAnchor(event.currentTarget);
  }

  const closeMenu = () => {
    setAnchor(null);
  }

  const makeChat= async  () => {
    const {data} = await axios.post<ChatType>("http://loaclhost:5000/chats",{
      userId: 1,
      friendId: friend,
    });

    const { chatId } = data;
    changeTab(chatId);
    closeMenu();
  };


  return (
    <Container>
      <Modal open={open} onClose={closeModal}>
        <FriendAdd callback={finishAddFriend} />
      </Modal>
      <Menu
         open={anchor !== null}
         anchorEl={anchor}
         onClose={closeMenu}
         anchorOrigin={{
           vertical: "center",
           horizontal: "center",
         }}
         >
           <MenuItem onClick={makeChat}>채팅하기</MenuItem>
         </Menu>
        
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              label="친구 검색"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={Search_friend}
            />
          </Grid>

          <Grid item xs={1.5}>
            <Box sx={{ p: "8px" }}>
              <IconButton color="primary" size="large" onClick={openModal}>
                <PersonAddIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <List>
        {friendList.map((friendss) => {
          return (
            <section key={friendss.id} onClick={openMenu}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={friendss.name}
                  secondary={friendss.statusMessage}
                />
              </ListItemButton>
            </section>
          );
        })}
      </List>
    </Container>
  );
};

export default Friends;
