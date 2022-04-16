import React from 'react';
import './Category.css';
import {Link} from "react-router-dom";
import './product'

function Category() {
    return (
        <div className="container">
            <nav className="nav" aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">All Products</li>
                </ol>
            </nav>
            <div className="row justify-content-center">
                <section className="section-products">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-8 col-lg-6">
                                <div className="header">
                                    <h3>Featured Product</h3>
                                    <h2>Popular Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-xl-2">
                                <div id="product-1" className="single-product">
                                    <div className="part-1">
                                        <a href="https://www.qries.com/">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title" href="#">Here Product Title</h3>
                                        <h4 className="product-old-price">$79.99</h4>
                                        <h4 className="product-new-price">$49.99</h4>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-2">
                                <div id="product-2" className="single-product">
                                    <div className="part-1">
                                        <span className="discount">15% off</span>
                                        <a href="product">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">Here Product Title</h3>
                                        <h4 className="product-price">$49.99</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-2">
                                <div id="product-3" className="single-product">
                                    <div className="part-1">
                                        <a href="https://www.qries.com/">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">Here Product Title</h3>
                                        <h4 className="product-old-price">$79.99</h4>
                                        <h4 className="product-new-price">$49.99</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-2">
                                <div id="product-4" className="single-product">
                                    <div className="part-1">
                                        <span className="new">new</span>
                                        <a href="https://www.qries.com/">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">Here Product Title</h3>
                                        <h4 className="product-price">$49.99</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-2">
                                <div id="product-1" className="single-product">
                                    <div className="part-1">
                                        <a href="https://www.qries.com/">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">Here Product Title</h3>
                                        <h4 className="product-old-price">$79.99</h4>
                                        <h4 className="product-new-price">$49.99</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-2">
                                <div id="product-2" className="single-product">
                                    <div className="part-1">
                                        <span className="discount">15% off</span>
                                        <a href="https://www.qries.com/">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">Here Product Title</h3>
                                        <h4 className="product-price">$49.99</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-3" className="single-product">
                                    <div className="part-1">
                                        <a href="https://www.qries.com/">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">Here Product Title</h3>
                                        <h4 className="product-old-price" color= "#fe302f">$79.99</h4>
                                        <h4 className="product-new-price">$49.99</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-4" className="single-product">
                                    <div className="part-1">
                                        <span className="new">new</span>
                                        <a href="https://www.qries.com/">
                                            <img className="photo1" src="http://www.bobodave.com/bmz_cache/b/b4f9b994ae1867ac8013cb0984a1d0ee.image.380x550.jpg" />
                                        </a>
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">Here Product Title</h3>
                                        <h4 className="product-price">$49.99</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>


        );
}
export default Category;