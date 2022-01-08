import React from 'react';
import './Home.css';
import Landingimage from '../Assets/bank.png';
import * as Reactbootstrap from 'react-bootstrap';


//Home page contents
const Home = () => {
    return (
        <div>
            <Reactbootstrap.Row>
                <Reactbootstrap.Col>
                    <div className="landing-page">
                        <h2>Welcome To</h2>
                        <h1>Sparks <span className='home_bank'>Bank</span></h1>
                        <p><b>We are committed to offering the most efficient, effective and secure way of delivering your financial information. Discover the ease of online banking with SparksBank</b></p>
                    </div>
                </Reactbootstrap.Col>
                <Reactbootstrap.Col className="home-image" >
                    <img src={Landingimage} className="webpic" alt="Home-page-Graph" height='550px' width='600px' />
                </Reactbootstrap.Col>
            </Reactbootstrap.Row>
        </div>
    );
}

export default Home;