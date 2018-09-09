import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

import LoginForm from './../loginbox/loginform';
import './../../App.css';
 
export default class Signin extends React.Component {
  render() {
    return (
        <article>
            <Helmet>
                <title>Sign In | Ticketchai</title>
                <meta name="description" content="Sign In | Ticketchai" />
            </Helmet>        
            <div className='pagebg'>     
                <Container>                    
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 4 }}>
                            <LoginForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        </article>
    )
  }
}