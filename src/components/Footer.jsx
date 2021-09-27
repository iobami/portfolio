import { route } from 'next/dist/next-server/server/router';
import React, { Fragment } from 'react';
import { HeartIcon, Github, Linkedin, Twitter, Yahoo } from '.';

export default function Footer() {
  const contacts = [
    { icon: <Github />, className: 'github', route: 'https://github.com/iobami' },
    { icon: <Linkedin />, className: 'linkedin', route: 'https://www.linkedin.com/in/ayobami-aladenoye' },
    { icon: <Twitter />, className: 'twitter', route: 'https://twitter.com/iobami' },
    { icon: <Yahoo />, className: 'yahoo', route: 'ayobamialadenoye@yahoo.com' },
  ];

  return (
    <Fragment>
      <div className="footer__container-pirej">
        <div className="content">
          <div className="d-flex flex-column justify-content-between h-100 w-100 text-center">

            <div className="contact--me_at">
              <div className="row ml-0 mr-0">
                <div className="col-sm-11 col-12 mx-auto">
                  <div className="row">

                    {contacts.map(({ icon, className, route }, index) => (
                      <div key={index} className="col-md-3 col-6 pt-3">
                        <a href={className === 'yahoo' ? `mailto: ${route}` : route} target="_blank">
                          <div className={`contact--me___item ${className}`}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                              {icon}
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="btn copyright">
                <span className="d-flex align-items-center">
                  Copyright © {new Date().getFullYear()}. iobami <HeartIcon />. &nbsp; All rights reserved.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
