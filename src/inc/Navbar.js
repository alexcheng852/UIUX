import React from "react";
import './inc.css';
import {Button,Navbar,NavDropdown,Container, ButtonGroup, Dropdown, DropdownButton, Form, FormControl, Nav,Col} from "react-bootstrap";
import {Link} from "react-router-dom";


function Topbar() {
    return (
        <div style={{backgroundColor: "#f5e7f6"}}>
        <Navbar expand="lg" >
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <a href="/">
                    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/503/7107186503_b10c0ad6-f190-47ac-b05a-4343eef845f2.png?cb=1649700084"/>
                    </a>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Category" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/product"><a>Action</a></NavDropdown.Item>
                            <NavDropdown.Item href="/product1">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/product">
                                All Product
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/" class="nav-link active"> Home </Link>
                        <Link to="/Contact" class="nav-link active"> Contact us</Link>
                        <Link to="/" class="nav-link active"> Forum</Link>
                        <Link to="/" class="nav-link active"> News</Link>
                        <Link to="/" class="nav-link active"> Log In</Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>


    );
}
export default Topbar;