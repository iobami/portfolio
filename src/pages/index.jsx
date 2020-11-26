import { Fragment } from 'react';
import { FeaturesMentioned, Footer, MyTitle, TopThree, WhatIDo } from '../components';

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

        <Footer />

      </div>
    </Fragment>
  )
}
