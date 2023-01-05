import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";

const SignUp = (): JSX.Element => {

    const [id, setId] = useState<string>();
    const [pass, setPass] = useState<string>();

    const updateUserId = (event: ChangeEvent<HTMLInputElement>) => {
        const inputId = event.currentTarget.value;
        setId(inputId);
    };

    const updateUserPass = (event: ChangeEvent<HTMLInputElement>) => {
        const inputPass = event.currentTarget.value;
        setPass(inputPass);
    };

    const addUser = async () => {
      try {
        await axios.post("http://localhost:8080/users/add", { id: id, password: pass });
        alert("회원 가입 성공");
        window.location.reload();
        window.location.href = '/Login';
        alert("1");
    }catch (e) {
        if (axios.isAxiosError(e) && e.response) {
          const { data } = e.response;
          if (data) {
            alert(data.message);
          }
        }
      }
    };

    
    

      return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="Enter Id" onChange={updateUserId}/>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={updateUserPass}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => addUser()}> 
            Sign up
          </Button>
        </Form>
      );
};

export default SignUp;














