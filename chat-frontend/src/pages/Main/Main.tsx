import React, { ChangeEvent, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Tabs, Paper, Tab, Box } from "@mui/material";
import User from "../User/User";
import queryString from "query-string";
import Friend from "../Friends/Friend";
import Chats from "../Chats";
import Room from "../Chats/room";

const Main = () => {
  const [CurrentTab, setCurrentTab] = useState<string>("User");
  const myId = queryString.parse(location.search);
  const [chatId, setChatId] = useState<string | null>(null);
  const idKey = myId.id;

  const ChangeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
  };

  const Logout = () => {
    window.location.href = "/Login";
  }

  const moveToChat = (chatId: string) => {
    setCurrentTab("chats");
    setChatId(chatId);
  };

  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => ChangeTab("Room")}>Rooms</Nav.Link>
            <Nav.Link onClick={() => ChangeTab("User")}>User</Nav.Link>
            <Nav.Link onClick={() => ChangeTab("Friend")}>Friend</Nav.Link>
            <Nav.Link onClick={() => Logout()}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Box sx={{ pb: "80px" }}>
        {CurrentTab === "User" && <User myId={idKey as string}/>}
        {CurrentTab === "Friend" && <Friend myId={idKey as string} changeTab={moveToChat}/>}
        {CurrentTab === "chats" && <Chats myId={idKey as string} chatId={chatId}/>}
        {CurrentTab === "Room" && <Room myId={idKey as string} chatId={"List"}/>}
      </Box>
      </>
  );

}

export default Main;