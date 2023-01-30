import React from "react";

const Portfolio = () => {
    return (<div className="container mt-5">
            <div className="row title">
                <h1 className="header-title d-flex justify-content-star">Portfolio</h1>
                <p className="header-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta modi dolorem totam vitae accusantium officiis eligendi necessitatibus sunt consequatur, exercitationem voluptates numquam. Cum temporibus sit laboriosam dignissimos quaerat fuga.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="http://ximg.es/600x400/000/fff" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-primary d-flex justify-content-start">Card title</h5>
                            <p className="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="http://ximg.es/600x400/000/fff" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-primary d-flex justify-content-start">Card title</h5>
                            <p className="card-text text-start">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="http://ximg.es/600x400/000/fff" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-primary d-flex justify-content-start">Card title</h5>
                            <p className="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Portfolio;