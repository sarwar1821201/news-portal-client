import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='mx-auto w-25'  >
        <h3>Please Register First</h3>
     <Form>

     <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="enter your name" required  />
  </Form.Group>

  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="enter your email" required  />
  </Form.Group>

  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label>Photo Url</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Photo Url" required  />
  </Form.Group>

  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="enter your password" required  />
  </Form.Group>
    
    <Button className='mt-2' variant='primary' type='submit'>
        Register
    </Button>

    <Link to='/login'> <p className='mt-2'> Already Have An Account? Go To  <span className='text-danger'>Login</span>   </p> </Link>
</Form>
    </Container>
    );
};

export default Register;