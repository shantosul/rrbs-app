import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import './../../App.css';
 
export default class Dashboard extends React.Component {
  render() {
    return (
        <article>
            <Helmet>
                <title>Dashboard | Ticketchai</title>
                <meta name="description" content="Dashboard | Ticketchai" />
            </Helmet>        
            <div className='dashboard'>     
                <Container>                    
                    <Row>
                        <Col sm="12" md="12">
                            <Jumbotron className="mt-4">
                                <h1 className="display-3">Hello, world!</h1>
                                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                <hr className="my-2" />
                                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                <Button color="primary">Learn More</Button>
                                </p>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        </article>
    )
  }
}