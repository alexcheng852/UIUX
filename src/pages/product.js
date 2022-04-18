import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import "./pages.css"


import {Button, Card} from "react-bootstrap";

const product = ({product}) => {
    return (
        <div className= "products">
            <div className="container-fluid">
            <nav className="nav" aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">All Products</li>
                </ol>
            </nav><br/>
            </div>
            {productsData.map((product) => (
            <div className="productscard">

                    <div className=" row-cols-md-5 g-5">
                <Card style={{ width: '15rem', height:'30rem' }}>
                <div>
                    <a href={`/products/${product.id}`}>
                        <img className="photo2" src={product.img} />
                    </a>
                </div>
                    <Card body>
                    <Card.Title>{product.brand}</Card.Title>
                        <Card.Text>{product.name} <p className="text-decoration-line-through">{product.oldprice}</p><p className="text-danger"><h4>{product.newprice}</h4></p></Card.Text>
                    <div>
                        <Link to={`/products/${product.id}`}><Button variant="primary">Know More</Button></Link>
                    </div>
                    </Card>
                </Card>
                </div>

            </div>
        ))}
        </div>
    )};



export default product;

