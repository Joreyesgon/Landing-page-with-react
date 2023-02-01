import React from "react";

const CardImage = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://st3.depositphotos.com/12439124/15009/i/600/depositphotos_150090052-stock-photo-black-leather-texture-background.jpg" className="d-block w-100" alt="..." />
                    <div className="card-img-overlay">
                        <p className="bg-light display-1 text mt-5">One Page Wonder</p>
                        <h3 className="bg-light display-4 mt-3">Will Knock Your Socks Off</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardImage;