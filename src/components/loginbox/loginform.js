import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import logo from './../../logo.svg';

import './loginform.css';

class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <img src={logo} className="login_logo" alt='ticketchai' />
                    <hr/>
                    <CardBody>
                        <Link className="btn btn-outline-danger float-right" to="/signup">Sign Up</Link>
                        <CardTitle className="mb-4 mt-1">Sign In Here</CardTitle>
                        <Form>
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
                                >
                                Sign In  
                                </Button>
                            </FormGroup>                                                       
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default LoginForm;