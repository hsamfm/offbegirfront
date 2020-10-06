import React from "react";
import logo from '../logo.png';
import {Link} from "react-router-dom";
import {NavDropdown,Navbar, Nav, Button, Form, FormControl} from "react-bootstrap";


export default () => (
  <div dir="rtl">
    <Navbar bg="warning" variant="light">
      <Navbar.Brand><Link to="/"><img src={logo} alt="offbegir logo" width="100px"/></Link></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/" className="text-light">خانه</Link></Nav.Link>
        <Nav.Link><Link to="/about" className="text-light">درباره ما</Link></Nav.Link>
        {/*<Nav.Link><Link to="/register">ثبت نام</Link></Nav.Link>*/}
        {/*<Nav.Link><Link to="/login">ورود</Link></Nav.Link>*/}

        <NavDropdown title="ادامه" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><Link to="/login" className="text-dark">ورود</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><Link to="/register" className="text-dark">ثبت نام</Link></NavDropdown.Item>
          {/*<NavDropdown.Divider />*/}
          {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="جستجو ..." className="mr-sm-2"/>
        <Button variant="outline-info">جستجو</Button>
      </Form>
    </Navbar>
  </div>
)
