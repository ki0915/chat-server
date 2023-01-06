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
  import * as React from "react";
  import axios from "axios";
  import AddIcon from '@mui/icons-material/Add';


  type UserType = {
    id: string;
    createdAt: string;
  };

  type myType = {
    myId: string | null[];
  };
  
  const User = (props: myType): JSX.Element => {
    const { myId } = props;
    const [friednAddId, setfriednAddId] = useState<string>("");
    const [userList, setUserList] = useState<UserType[]>([]);


    const getFriendList = async () => {
      const { data } = await axios.get<UserType[]>(
        "http://localhost:8080/users"
      );
  
      setUserList(data);
    };

    const addFriend = async (id: string) => {
        try {
            setfriednAddId(id);
            await axios.post("http://localhost:8080/friends", { userId: myId, friend: id});
        } catch (e) {
          if (axios.isAxiosError(e) && e.response) {
            const { data } = e.response;
            if (data) {
              alert(data.message);
            }
          }
        }
      };
    
  
    useEffect(() => {
      getFriendList();
    }, []);
  
  
    return (
      <Container>
        <List>
          {userList.map((user) => {
            return (
              <section key={user.id}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.id}
                    secondary={user.createdAt}
                  />
                  <Button onClick={() => addFriend(user.id)}><AddIcon/></Button>
                </ListItemButton>
              </section>
            );
          })}
        </List>
      </Container>
    );
  };
  
  export default User;
  