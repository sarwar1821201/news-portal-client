import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate= useNavigate()
    const location=useLocation()

    const from= location.state?.from?.pathname || '/category/0'
    
    const handleLogin= (event) => {
         event.preventDefault()

         const email= event.target.email.value;
         const password= event.target.password.value;

         console.log(email,password)

         signIn(email,password)
         .then(result=> {
            const loggedUser= result.user;
            console.log(loggedUser)
            event.target.reset('')
            navigate(from, {replace: true} )
         } )

         .catch(error =>{
            console.log(error)
         } )
    }

    return (
        <Container className='mx-auto w-25'  >
            <h3>Please Login</h3>
         <Form onSubmit={handleLogin}  >
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