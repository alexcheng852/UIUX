import React from 'react';
import './pages.css';


function News() {
    return(
        <div >
            <div className="container">
                <nav className="nav" aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">News</li>
                    </ol>
                </nav>
            </div>

            <div className="content">
                <p className="fw-bold"><br/><br/>
                    <h3>News</h3></p>
                <br/><br/><br/>
                <p class="fw-bold"><h4>As our webpage is regenerating, ERROR page may appear. Please RELOAD the page and it will be ok.</h4></p>
                <p className="fw-bold"><h4>In the meanwhile, the latest products and offers will be uploaded on IG and FACEBOOK.</h4></p>
                <p className="fw-bold"><h4>Please have a look on our IG/ FB and products are as low as 40% off</h4></p>
                <p className="fw-bold"><h4>Facebook  (fb.me/bobodaveonlineshop) IG https://www.instagram.com/bobodaveshop/</h4></p><br/>
                <p className="fw-bold"><h4>Thank you</h4></p>
                <br/><br/>
                <br/><br/>
                <hr/>
                <p className="fw-bold"><h4>FREE SHIPPING FOR THE FOLLOWING BRANDS:</h4></p>
                <p className="fw-bold"><h4>
                Buy any 2 pcs of the following brands will have free international shipping!
                    (excluding limited edition and drinks)</h4></p><br/>
                <p className="font-weight-bold text-danger" ><h5>Haba &nbsp; Astalift &nbsp; Cle de peau cosmetics &nbsp; Fancl</h5></p>

                <p className="font-weight-bold text-danger"><h5>Menard&nbsp; Mikimoto Cosmetics&nbsp; Laduree cosmetics&nbsp; Sofina</h5></p><br/>

                <p className="fw-bold"><h4>
                Buy any product from the brands above will have free international shipping.</h4></p>
                <p className="fw-bold"><h4>There are No shipping fee for the brands above.</h4></p>
                <p className="fw-bold"><h4>The shipping fee will be collected for the products of other brands only.</h4></p>
                <p className="fw-bold"><h4>For all products which are labelled as free shipping have no shipping fee, too.</h4></p>

            </div>



        </div>


    );
}
export default News;