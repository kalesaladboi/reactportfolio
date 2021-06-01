import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { HashLink as Anchor } from 'react-router-hash-link';

function About() {
    const myDate = new Date();
    const hours = myDate.getHours();
    let greeting;

        if (hours < 12) {
            greeting =  'Good morning,';
        }
        else if( hours >= 12 && hours <= 17) {
            greeting =  'Good afternoon,';
        }
         else {
             greeting = 'Good evening,'
         }
    

    return (
        <Router>
        <main>
    <section>
        <div className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-12">
                        <div className="hero-content">
                        <div className="row">
                                <div className="col-xxl-3 col-xl-4">
                                </div>
                                <div className="col-xxl-9 col-xl-8">
                                <h1>{greeting} My name is Kyle,I'm a Web Designer &amp; Fullstack Developer out of Eustis, FL.</h1>
                                <h2>I always enjoyed art &amp; computers then I was able to translate that into a
                                career. Learn more <Anchor to="/#about">about me</Anchor> below or please, take a look at my <Link
                                    to="/portfolio">portfolio</Link> &amp; <Link to="/resume">resume</Link>. <Link to="/contact">Contact me</Link> with any questions or concerns.</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5 mb-5" id="about">
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="section mt-5 mb-5">
                        <p>Good morning. In less than an hour, aircraft from here will join others from around the world. And you will be launching the largest aerial battle in this history of mankind. Mankind -- that word should have new meaning for all of us today. We can't be consumed by our petty differences anymore. We will be united in our common interests. Perhaps its fate that today is the 4th of July, and you will once again be fighting for our freedom, not from tyranny, oppression, or persecution -- but from annihilation. We're fighting for our right to live, to exist. And should we win the day, the 4th of July will no longer be known as an American holiday, but as the day when the world declared in one voice:</p>
                        <p>
                        "We will not go quietly into the night! We will not vanish without a fight! We're going to live on! We're going to survive!" Today, we celebrate our Independence Day!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</main>
</Router>
    )

}
export default About;