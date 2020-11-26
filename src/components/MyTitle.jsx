import React, { Fragment } from 'react';

export default function MyTitle() {

  return (
    <Fragment>
      <div className="position-relative h-100">
        <div className="container p-2 h-100">
          <div className="row ml-0 mr-0 text-center h-100">
            <div className="job-title d-flex flex-column justify-content-around align-items-center w-100">
              <div className="animate__animated animate__fadeInUp">
                <h1>Hello, I'm Ayobami</h1>
                <h1 className="m-1">A Front-End Developer</h1>
              </div>
              <div />
            </div>
          </div>
        </div>

        <span>
          <div className="svg-border-rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#181818" fillOpacity="1"
                d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,266.7C840,277,960,267,1080,250.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </span>
      </div>
    </Fragment>
  );
}
