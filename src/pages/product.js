import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import "./pages.css"
import "./Category.css"
import {Card, Col, Row} from "react-bootstrap";

const product = () => {
    const products = productsData.map(product => {
        return (
            <div key={product.id}>
                <div className="col-md-6 col-lg-4 col-xl-2">
                    <Card style={{ width: '18rem' }}>
                    <div className="part-1">

                            <a href={`/products/${product.id}`}>
                                <img className="photo1" src={product.img} />
                            </a>
                    </div>
                    <div className="part-2">
                            <h3 className="product-brand" href="#">{product.brand}</h3>
                            <h3 className="product-name" href="#">{product.name}</h3>
                            <h4 className="product-old-price text-decoration-line-through">${product.price}</h4>
                            <h4 className="product-new-price">${product.price}</h4>
                        </div>
                    </Card>

                    </div>
                </div>

        );
    });


    return (
        <div className="container">
            <nav className="nav" aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">Products</li>
                </ol>
            </nav>
            <h1>Products Page</h1>
            <div className="row">

                {products}
            </div>
        </div>
    );
};
export default product;