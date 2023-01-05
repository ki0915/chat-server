import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Tabs, Paper, Tab, Box } from "@mui/material";
import User from "../User/User";
import queryString from "query-string";

const Main = () => {
  const [CurrentTab, setCurrentTab] = useState<string>("User");
  const [chatId, setChatId] = useState<number | null>(null);
  const myId = queryString.parse(location.search);
  const idKey = myId.id;

  const ChangeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
    console.log(myId);
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
            <Nav.Link onClick={() => ChangeTab("Logout")}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Box sx={{ pb: "80px" }}>
        {CurrentTab === "User" && <User myId={idKey as string}/>}
      </Box>
      </>
  );

}

export default Main;