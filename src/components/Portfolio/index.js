import React from 'react';
import ProjectList from '../ProjectList'

function Portfolio() {

  return (
    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="intro">
                        <div className="hero-content">
                            <h1>My Latest Work</h1>
                            <h2>Here are some samples of the projects I've worked on.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="row">
                        <ProjectList />
                    </div>
                </div>
            </div>
        </div>  
    </section>
  );
}
export default Portfolio;