import React, { ChangeEvent, useState } from "react";
import "./App.css";
import Login from "./pages/Login/components/Login";
import SignUp from "./pages/Login/components/SignUp";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main/Main";
import User from "./pages/User/User";
const App = (): JSX.Element => {

  return(
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Main" element={<Main/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
   
};

export default App;
