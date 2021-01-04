import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
const Home =() =>(

    <Fragment>
        <Helmet>
            <title>Quik Quiz-Home</title>
        </Helmet>
        <div id="home">
            <section>
                <div>
                    <span className="mdi mdi-cube-outline"></span>
                </div>
                <h1> Quick Quiz</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>    

                </div>
            </section>

         </div>
    </Fragment>

);

export default Home;