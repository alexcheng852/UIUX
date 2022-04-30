import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"
import "./pages.css"
import StarRatings from 'react-star-ratings';
import {Button, Card, Form} from "react-bootstrap";

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)


    return (
        <div className="container">
            <nav className="nav" aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active"><a href="/product">All Products</a></li>
                    <li className="breadcrumb-item active">{thisProduct.name}</li>
                </ol>
            </nav><br/>
        <div className="d-flex">
            <div className="flex-shrink-0">
            <img className="photo2" src={thisProduct.img} />
            </div>
            <div className="flex-grow-1 ms-3">
            <h1>{thisProduct.name}</h1><br/>
                <p className="text-decoration-line-through">{thisProduct.oldprice}</p>
                <p className="text-danger"><h4>{thisProduct.newprice}</h4></p>
                <p>Avaerage rating  <StarRatings starDimension='20px' rating={thisProduct.rating} starRatedColor="blue" name='rating'/></p><br/>
                <p>{thisProduct.description}</p>
                <div className="cartAdd">
                Add to Cart :
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br/>
                    <input type="image" src="http://www.bobodave.com/includes/templates/orange/buttons/english/button_in_cart.gif" alt="Add to Cart" title=" Add to Cart "></input>
                </div>


            </div>
        </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


        </div>

    )
}

export default ProductDetail;