import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mx-auto w-25'  >
            <h3>Please Login</h3>
         <Form>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="enter your email" required  />
      </Form.Group>
  
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="enter your password" required  />
      </Form.Group>
        
        <Button variant='primary' type='submit'>
            Login
        </Button>

        <Link to='/register'> <p className='mt-2'> New To This Site? Please <span className='text-danger'>Register</span>   </p> </Link>
    </Form>
        </Container>
    );
};

export default Login;