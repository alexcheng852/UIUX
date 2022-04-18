import React from "react";

function  Footer() {
    return (
        <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-2">
                <h5 className="text-uppercase">Bobodave</h5>
                <p>We create possibilities for the connected world.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Explore</h5>
                <ul className="list-unstyled">
                    <li><a href="/" className="text-decoration-none link-dark">Home</a></li>
                    <li><a href="#!" className="text-decoration-none link-dark">About</a></li>
                    <li><a href="#!" className="text-decoration-none link-dark">Froum</a></li>
                    <li><a href="/Contact" className="text-decoration-none link-dark">Contant Us</a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Information</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="text-decoration-none link-dark"><h6>Shipping</h6></a></li>
                    <li><a href="#!" className="text-decoration-none link-dark"><h6>Payment</h6></a></li>
                    <li><a href="#!" className="text-decoration-none link-dark"><h6>Privacy Notice</h6></a></li>
                    <li><a href="#!" className="text-decoration-none link-dark"><h6>Site Map</h6></a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Follow</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" class="text-decoration-none link-dark"><h6>Facebook</h6></a></li>
                    <li><a href="#!" class="text-decoration-none link-dark"><h6>Instagram</h6></a></li>
                    <li><a href="#!" class="text-decoration-none link-dark"><h6>Twitter</h6></a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">

                <h5 className="text-uppercase">Contact</h5>
                <p><h6>Tsuen Wan Panda Plaza HK</h6></p>
                <p><h6>order@bobodave.com</h6></p>
                <p><h6>bobodavehk@gmail.com</h6></p>
                <p><h6> + 852 1234 5678</h6></p>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="http://www.bobodave.com/"> Bobodave Online Shop.</a>
    </div>

        </footer>
    );
}
export default Footer;
