import React, { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function TopThree() {
  const top3 = [
    {
      title: 'Bams The Bot',
      src: 'https://res.cloudinary.com/iobami/image/upload/v1619116003/portfolio/port_ysuned.png',
      description: 'An AI powered web application for making admission ' +
        'enquiries at the University of Ibadan'
    },
    {
      title: 'Qui',
      src: 'https://res.cloudinary.com/iobami/image/upload/v1619116003/portfolio/port1_pxp1nk.png',
      description: 'Osobot\'s user dashboard for uploading exam objective questions ' +
        'and excel files'
    },
    {
      title: 'Waste 2 Wealth',
      src: 'https://res.cloudinary.com/iobami/image/upload/v1619116003/portfolio/port2_vmxvph.png',
      description: 'A product that helps consumers gain rewards when they consume certain drinks'
    }
  ];

  return (
    <Fragment>
      <div className="row m-0 top-threeee-fronter-container">
        <div className="col-sm-11 col-12 mx-auto">
          <div className="row">
            {top3.map(({ title, description, src }, index) => (
              <div
                key={index}
                className="col-lg-12 col-xl-4 pt-4"
              >
                <div className="top-three-item position-relative">
                  <img src={src} alt="" />

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
