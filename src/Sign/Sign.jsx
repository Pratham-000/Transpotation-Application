import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from '../context/Firebase'
import { useState  , useEffect} from 'react';
import { MyComponent } from '../assets/Mycomponent';
import {useNavigate } from 'react-router-dom';
function BasicExample() {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');


  const HandeSubmit = async (e) =>
  {
      e.preventDefault();
      console.log("Signin up a user ....");
      
     const result =  await firebase.signupUserWithEmailAndPassword(email , password);
      console.log("Sucessfull" , result);
  }
  // console.log(firebase);

  useEffect(() => {
    
    if(firebase.isLoggedIN)
    {
      navigate('/');
    }
  }, [firebase , navigate])
  
   
  return (
    <div className="container mt-5">
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <hr />
    <Form onSubmit={HandeSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email" 
        />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" 
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Create Account
      </Button>
      <br />
     <Button className='mt-3 ' variant="danger" onClick={firebase.signinWthGoogle}>Sign in With Google <img src= {MyComponent.goole_img} width={20}   style={{'borderRadius':'5px'}} alt="" /> </Button>
    </Form>
    </div>
  );
}

export default BasicExample;