import React from "react";

function  Footer() {
    return (
        <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><h6>Link 1</h6></a></li>
                    <li><a href="#!"><h6>Link 2</h6></a></li>
                    <li><a href="#!"><h6>Link 3</h6></a></li>
                    <li><a href="#!"><h6>Link 4</h6></a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">

                <h5 className="text-uppercase">Contact</h5>
                <p><h6>New York, NY 10012, US</h6></p>
                <p><h6>info@example.com</h6></p>
                <p><h6> + 01 234 567 88</h6></p>
                <p><h6> + 01 234 567 89</h6></p>
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
