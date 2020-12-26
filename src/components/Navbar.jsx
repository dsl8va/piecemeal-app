import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {
  Form, Nav, Navbar, NavDropdown, Row,
} from 'react-bootstrap';

export default function NavBar() {
  // const [search, setSearch] = useState('');


  const handleClick = () => {
    const search = document.getElementById('query').value;
    console.log('search:', search);
  };

  return (

     <Navbar className="mb-3" bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home"><h2><b>Piecemeal</b></h2></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#custom">Custom Search</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="secondary">Search</Button>
        </Form>
     </Navbar>

  );
}
