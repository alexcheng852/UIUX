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
                    </select><br/><br/>
                    <input type="image" src="http://www.bobodave.com/includes/templates/orange/buttons/english/button_in_cart.gif" alt="Add to Cart" title=" Add to Cart "></input>
                </div>


            </div>
        </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="Contact-Form container border border-5 " id="Contact-Form">
                <span>
                <Form>
                <fieldset >
                    <legend >Customer Reviews and Ratings</legend>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Rating:</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>Select rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea className="form-control" rows="1" id="comment"></textarea>
                </div><br/>
                <Button variant="primary" type="submit" >
                Submit
                </Button><br/><br/>

                </fieldset>
                </Form>
                </span>

            </div>
            <hr/>
            <div className="product-review-wrapper" data-reviewid="62628c345a00880204f4f3b1">
                <div className="product-review-user">
                    <table className="review-info-table">
                        <tr>
                            <td className="comment-profile-pic" rowSpan="2">
                                <img src="https://www.hktvmall.com/_ui/desktop/common/images/img_Large_ProfilePic_noImage.svg"/></td>
                            <td><a><span className="review-username">{thisProduct.username}</span></a></td>
                        </tr>
                        <tr>
                            <td className="td-rating-n-date">
                                <span className="review-date">{thisProduct.data} &nbsp;&nbsp; <StarRatings starDimension='15px' rating={thisProduct.userrating} starRatedColor="blue" name='rating'/></span></td>
                        </tr>
                    </table>
                </div>
                <div className="product-review-rightPanel">
                    <div className="product-review-content">
                        <div className="review-title"><span>{thisProduct.reviewtitle}</span></div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ProductDetail;