import React, { Fragment } from 'react';
import { HeartIcon } from '.';

export default function Footer() {

  return (
    <Fragment>
      <div className="footer__container-pirej">
        <div className="content">
          <div className="d-flex flex-column justify-content-between h-100 w-100 text-center">

            <div className="contact--me_at">
              <div className="row ml-0 mr-0">
                <div className="col-sm-11 col-12 mx-auto">
                  <div className="row">
                    <div className="col-md-3 pt-3">
                      <div className="contact--me___item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="btn copyright">
                <span className="d-flex  align-items-center">
                  Copyright © 2020. iobami <HeartIcon />. &nbsp; All rights reserved.
                  </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
