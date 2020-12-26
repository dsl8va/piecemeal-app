import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {
  Form, Nav, Navbar, NavDropdown, Row,
} from 'react-bootstrap';

export default function NavBar({setHome, setAbout, setCustom, setResults}) {

  const handleClick = () => {
    const search = document.getElementById('query').value;
    console.log('search:', search);
  };

  const renderHome = () => {
    setHome(true);
    setAbout(false);
    setCustom(false);
    setResults(false);
  }
  const renderAbout = () => {
    setHome(false);
    setAbout(true);
    setCustom(false);
    setResults(false);
  }
  const renderCustom = () => {
    setHome(false);
    setAbout(false);
    setCustom(true);
    setResults(false);
  }

  return (

     <Navbar className="mb-3" bg="primary" variant="dark" sticky="top">
        <Navbar.Brand onClick={renderHome} href="#home"><h2><b>Piecemeal</b></h2></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={renderHome} href="#home">Home</Nav.Link>
          <Nav.Link onClick={renderAbout} href="#about">About</Nav.Link>
          <Nav.Link onClick={renderCustom} href="#custom">Custom Search</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="secondary">Search</Button>
        </Form>
     </Navbar>

  );
}
