import React from "react";

const Services = () => {
    return (<div className="container mt-5">
        <div className="service" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="http://ximg.es/600x400/000/fff" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div className="col-md-8 align-self-center">
                    <div className="card-body">
                        <h1 className="card-title text-end mb-3">This First Heading <span className="text-muted">Will Catch Your Eye</span></h1>
                        <p className="card-text text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam id saepe similique commodi consectetur velit quod sequi enim nemo, accusantium numquam iusto magnam earum veritatis quae fugit ab rem.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service" >
            <div className="row g-0">
                <div className="col-md-8 align-self-center">
                    <div className="card-body">
                        <h1 className="card-title text-start mb-3">The Second Heading <span className="text-muted">Is Pretty Cool Too</span></h1>
                        <p className="card-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam id saepe similique commodi consectetur velit quod sequi enim nemo, accusantium numquam iusto magnam earum veritatis quae fugit ab rem.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="http://ximg.es/600x400/000/fff" className="img-fluid rounded-circle" alt="..." />
                </div>
            </div>
        </div>
    </div>)
}

export default Services;