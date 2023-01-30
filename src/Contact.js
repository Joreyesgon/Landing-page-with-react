import React from "react";

const Contact = () => {
    return (<div className="container mt-5">
        <div className="row contact-title">
            <h1 className="header-title d-flex justify-content-star">Contact</h1>
            <p className="header-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore odit iste, quos suscipit unde incidunt quod repudiandae, molestias aut totam quasi impedit aperiam eligendi doloremque veritatis? Ea, quae accusamus?</p>
        </div>
        <div className="row col-12 d-flex justify-content-center mb-2">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label d-flex justify-content-end">Your E-mail</label>
            <div className="col-sm-5">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Your Email" />
            </div>
        </div>
        <div className="row col-12 d-flex justify-content-center">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label d-flex justify-content-end">Your
                message</label>
            <div className="col-sm-5">
                <textarea className="form-control" placeholder="Please enter your message here..."
                    id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label htmlFor="floatingTextarea2"></label>
                <div className="c d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>)
}

export default Contact;