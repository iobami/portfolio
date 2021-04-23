import React, { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function WhatIDo() {

  return (
    <Fragment>
      <div className="cool-stuff-I-do__container">
        <div className="row ml-0 mr-0">
            <div className="col-md-11 col-lg-9 m-auto text-center">
              <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn">
                <h2 className="text-center">
                  I create and develop cross-platform concepts
                  to get the most out of your brand.
                </h2>

                <div className="mt-3">
                  <a className="btn btn-primary">My Projects</a>
                </div>
              </ScrollAnimation>
            </div>
        </div>
      </div>
    </Fragment>
  );
}
