import React from 'react';
import {Button, Carousel, Card,Toast} from "react-bootstrap";
import {Link} from "react-router-dom";
import product from "./product";

function Home() {
    return (
<div>
<Carousel variant="dark">
    <Carousel.Item>
        <img
            className="responsive-image gtmHomePromotionalBannersImpress swiper-lazy swiper-lazy-loaded"
            src="https://shoplineimg.com/6103db71dc89250008337040/61e2300e270f320011f877cd/1200x.webp?source_format=jpg"
            alt="First slide"/>

    </Carousel.Item>
    <Carousel.Item>
        <img
            className="responsive-image gtmHomePromotionalBannersImpress swiper-lazy swiper-lazy-loaded"
            src="https://shoplineimg.com/6103db71dc89250008337040/61e2301b8760230020148fe0/1200x.webp?source_format=jpg"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3></h3>
            <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="responsive-image gtmHomePromotionalBannersImpress swiper-lazy swiper-lazy-loaded"
            src="https://shoplineimg.com/6103db71dc89250008337040/61e23017d021fa002c3ce252/1200x.webp?source_format=jpg"
            alt="Third slide"
        />

    </Carousel.Item>
</Carousel>
<br/><br/><br/>


    <div className="d-flex justify-content-around" id="card">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://www.bobodave.com/images/addictiontheyeshadow.jpg" />
            <Card.Body>
                <Card.Title>Addiction</Card.Title>
                <Card.Text>
                    Addiction The Eyeshadow<br/> (buy 2 get free shipping)<br/><p className="text-decoration-line-through">USD$45.80</p><p className="text-danger">USD$25.80</p>
                </Card.Text>
                <Link to="./product"><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://www.bobodave.com/images/3ddeepbotolium.jpg" />
            <Card.Body>
                <Card.Title>Dr Ci </Card.Title>
                <Card.Text>
                    Dr Ci Labo 3D Deep Botolium Enrich Lift 0.5g packet sample <p className="text-decoration-line-through">USD$3.00</p><p className="text-danger">USD$1.43</p>
                </Card.Text>
                <Link to="./product"><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://www.bobodave.com/bmz_cache/b/bb7efb2e227e96e66f94c4e7dab9d4b5.image.485x550.JPG" />
            <Card.Body>
                <Card.Title>Suqqu</Card.Title>
                <Card.Text>
                    Designing color eyes 04 AYANADESHIKO (free shipping) <p className="text-decoration-line-through">USD$143.31 </p><p className="text-danger">USD$65.92</p>
                </Card.Text>
                <Link to="./product"><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://www.bobodave.com/images/jsmakeupbase2013.jpg" />
            <Card.Body>
                <Card.Title>Jill Stuart </Card.Title>
                <Card.Text>
                    lasting tint control base 30ml color03 <p className="text-decoration-line-through">USD$40.13  </p><p className="text-danger">USD$32.96</p>
                </Card.Text>
                <Link to="./product"><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
            <Card.Body>
                <Card.Title>Ginza</Card.Title>
                <Card.Text>
                    Clarifying Lotion 200ml (free shipping) <p className="text-decoration-line-through">USD$200.64  </p><p className="text-danger">USD$186.31</p>
                </Card.Text>
                <Link to="./product"><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>


    </div><br/>
    <div style={{float: 'right'}}>
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
    </div><br/><br/>
</div>

    );
}
export default Home;