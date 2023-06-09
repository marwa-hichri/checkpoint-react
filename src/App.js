
import { Button, Form } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Login Page</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='mb-31' >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='mb-31'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className='mb-31'>Submit </Button>
    </Form> 
        
      </div>  
    </div>
  );
}

export default App;
