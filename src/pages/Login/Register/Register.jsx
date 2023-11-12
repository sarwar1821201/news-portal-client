import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {

    const {createUser} =useContext(AuthContext)
    const[error,setError] =useState('')

     const handleRegister= (event) => {

      

        event.preventDefault()
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password= event.target.password.value;
         const photo= event.target.photo.value;

         console.log(name,email,password,photo)
         
         if(password.length<6){
           setError('password must be at least 6 character')
           return
           
         }

        createUser(email,password)
        .then( result=> {
            const loggedUser= result.user;
            console.log(loggedUser)
        } )

        .catch(error=>{
            console.log(error)
        })

     }

    return (
        <Container className='mx-auto w-25'  >
        <h3>Please Register </h3>
     <Form onSubmit={handleRegister}  >

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
    <p className='text-danger' >{error}</p>
    </Container>
    );
};

export default Register;