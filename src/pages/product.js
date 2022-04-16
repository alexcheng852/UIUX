import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import "./pages.css"

import {Card, Col, Row} from "react-bootstrap";

const product = ({product}) => {
    return (
        <div className= "products">
            <nav className="nav" aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">All Products</li>
                </ol>
            </nav>
            {productsData.map((product) => (
            <div className="card">
                <div>
                    <a href={`/products/${product.id}`}>
                        <img className="photo1" src={product.img} />
                    </a>
                </div>
                <div>
                    <h3 className="product-brand" href="#">{product.brand}</h3>
                </div>
                <div>
                    <h3 className="product-name" href="#">{product.name}</h3>
                </div>
                <div>
                    <h4 className="product-old-price text-decoration-line-through">${product.price}</h4>
                </div>
                <div>
                    <h4 className="product-new-price">${product.price}</h4>
                </div>

            </div>

        ))}
        </div>
    )};



export default product;

