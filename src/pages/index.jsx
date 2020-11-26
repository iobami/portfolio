import { Fragment } from 'react';
import { FeaturesMentioned, MyTitle, TopThree, WhatIDo } from '../components';

export default function Home() {
  return (
    <Fragment>
      <div id="page-container" className="postion-relative">
        <div className="top-page-container page-header page-header-dark">
          <header>
            <div>
              <span className="name">J.</span>
              <span className="name">A</span>
            </div>
          </header>

          <MyTitle />

        </div>

        <TopThree />

        <WhatIDo />

        <FeaturesMentioned />

        <br />
        <br />
        {/* <div className="svg-border-rounded text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#2F3676" fill-opacity="1"
              d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,266.7C840,277,960,267,1080,250.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div> */}

      </div>
    </Fragment>
  )
}
