import React from 'react';
import './pages.css';

import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";


function Contact() {
    return(
        <div >
            <div className="container">
                <nav className="nav" aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">Contact</li>
                    </ol>
                </nav>
            </div>

            <div className="content">
                <br/>
                <p class="fw-bold"><h4>Bobodave Online Shop &nbsp;is located in Hong Kong. It was established in 2005. <br/>All the products are
                    direclty imported from Japan, Taiwan, Korea or Hong Kong.</h4></p>
                <br/><br/>
                <br/><br/>
                <p><font face="verdana,arial,helvetica,sans-serif" color="#ff0000"><strong>Contact Us:</strong></font></p>
                <br/>
                <p><strong>Email: <a href="mailto:order@bobodave.com">order@bobodave.com</a>,<a
                    href="mailto:bobodavehk@yahoo.com.hk">bobodavehk@gmail.com</a></strong></p>
                <p><b>Facebook:</b><a href="http://www.facebook.com/bobodave">http://www.facebook.com/bobodave</a></p>
                <p align="center"><strong><font color="#ff00ff">** If you find that the products you want are not listed in our
                    store, </font></strong></p>
                <p align="center"><strong><font color="#ff00ff">feel free to email us with the product name and quantity you
                    would like to have,</font></strong></p>
                <p align="center"><strong><font color="#ff00ff">&nbsp;we will reply to you as soon as possible**</font></strong>
                </p>
                <p align="center">&nbsp;</p>
                <br/>


            </div>

            <div className="Contact-Form container border border-5 " id="Contact-Form">
                <span>
                <Form>
                <fieldset >
                    <legend className= "text-left">Contact Us</legend>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea className="form-control" rows="3" id="comment"></textarea>
                </div><br/>
                <Button variant="primary" type="submit" >
                Submit
                </Button><br/>

                </fieldset>
                </Form>
                </span>

            </div>


        </div>


    );
}
export default Contact;