import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import logo from './../../logo.svg';

export default class Topnav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
            <Container>
                <NavbarBrand href="/">
                    <img src={logo} alt='ticketchai' />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/home">Dashboard</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        User
                        </DropdownToggle>
                        <DropdownMenu right>                        
                        <DropdownItem>
                            Profile
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Logout
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Container>          
        </Navbar>
      </div>
    );
  }
}
