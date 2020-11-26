import React, { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function TopThree() {
  const top3 = [
    {
      title: 'Bams The Bot',
      description: 'An AI powered web application for making admission ' +
        'enquiries at the University of Ibadan'
    },
    {
      title: 'Qui',
      description: 'Osobot\'s user dashboard for uploading exam objective questions ' +
        'and excel files'
    },
    {
      title: 'County',
      description: 'A React Native countdown timer mobile app'
    }
  ];

  return (
    <Fragment>
      <div className="row m-0 top-threeee-fronter-container">
        <div className="col-sm-11 col-12 mx-auto">
          <div className="row">
            {top3.map(({ title, description }, index) => (
              <div
                key={index}
                className="col-lg-12 col-xl-4 pt-4"
              >
                <div className="top-three-item position-relative">
                  <img src={`https://picsum.photos/200/300?random=${index}`} alt="" />

                  <div className="content overlay">
                    <ScrollAnimation delay={100 + (index * 250)} animateIn="animate__fadeIn">
                      <h5>
                        {title}
                        <span className="blob" />
                      </h5>

                      <div className="main">{description}</div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
