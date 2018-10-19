import React, {Component} from 'react';
import './style.css';


class Slider extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require('../../../assets/images/1.jpg')}
                             alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="black">
                                <p className="caption">Best masters</p>
                                <p className="caption">Our clients always satisfied</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../../../assets/images/2.jpg')}
                             alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="black">
                                <p className="caption">Signed up?</p>
                                <p className="caption">Consider, you're already brutal</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../../../assets/images/3.jpg')}
                             alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="black">
                                <p className="caption">Cool atmosphere</p>
                                <p className="caption">You feel?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        );
    }
}

export default Slider;
