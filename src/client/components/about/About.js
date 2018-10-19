import React, {Component} from 'react';
import Header from '../main/Header/Header';
import './style.css'
import {authenticate} from "../../actions/authenticate";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authenticate()),
    };
};

class connectedAbout extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (localStorage.getItem('authenticated') === 'true') {
            this.props.authenticate();
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="about">
                    <img className="w-50" src={require('../../assets/images/about.jpg')}
                         alt="About"/>
                    <div className="w-50 p-5">
                        <h2 className="welcome text-center">Welcome to our barbershop</h2>
                        <p className="no-women text-center">
                            There are no women here, no idle talk about anything, only the atmosphere of brutality
                            reigns here, inspired by European standards of quality and style.
                        </p>
                        Barbershop is much more than just a men's barber shop, it's even more than a men's club
                        of interests, this is exactly the place where you will find yourself and your style. Take our
                        word for it. Men's haircuts and a dangerous shave - this is our profile, and we are sure that we
                        cut and shave better than anyone. Not even discussed! As Frank Sinatra used to say, “A suit, a
                        hat, a good job and lonely drunkenness on weekends is what adorns a man.” We will not promise
                        that we will make Cary Grant out of you, but you can be sure of 3 things:
                        <br/>
                        - You will definitely be offered a cup of coffee or a glass of excellent bourbon.
                        <br/>
                        - We'll cut and shave you at the highest level.
                        <br/>
                        - When you leave, you will definitely come back.
                    </div>
                </div>
            </div>
        );
    }
}

const About = connect(null, mapDispatchToProps)(connectedAbout);
export default About;

