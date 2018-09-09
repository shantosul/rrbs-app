import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from './../../logo.svg';
import './registerform.css';

class RegisterForm extends React.Component {
  render() {    
    return (
      <div>
        <Card>
            <img src={logo} className="login_logo" alt='ticketchai' />
            <hr/>
            <CardBody>
                <Link className="btn btn-outline-danger float-right" to="/signin">Sign In</Link>
                <CardTitle className="mb-4 mt-1">Sign Up Here</CardTitle>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Type Your Name Here"
                                />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Type Your Email Here"
                                />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Type Your Password Here"
                                />
                    </FormGroup>
                    <FormGroup>
                        <Button 
                                    type="submit"
                                    color="danger"
                                    className="btn-block"
                                > Sign Up  
                                </Button>
                    </FormGroup>                                                       
                </Form>
            </CardBody>
        </Card>
      </div>
    );
  }
}

export default RegisterForm;
