import React, { Fragment } from 'react';
import { NuxtLogoText } from '.';

export default function FeaturesMentioned() {
  const frames = [
    {
      title: 'Avante',
    },
    {
      title: 'Dlyght',
    }
  ];

  return (
    <Fragment>
      <div className="row m-0 notable-mentions position-relative">
        <div className="col-sm-11 col-12 mx-auto mb-desktop--10 mb-mobile--5">

          <div className="row">
            {frames.map(({ title }, index) => (
              <div key={index} className="col-md-12 col-lg-6 mb-4">
                <div className="notable-mentions-item position-relative">
                  <img src={`https://picsum.photos/600/300?random=${index + 6}`} alt="" />

                  <span className="badge-taggg left">{title}</span>

                  {index === 0 && (
                    <span className="badge-taggg right">
                      <img src="/imgs/next.svg" alt="" />
                    </span>
                  )}
                  {index === 1 && (
                    <span className="badge-taggg whitebg-right">
                      <NuxtLogoText />
                    </span>
                  )}
                  <div className="content overlay">
                    <div className="main bottom">
                      So chap was arguing about the best and I told him oh snap !
                      I cant remember the rest
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        <div className="svg-border-rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="" fillOpacity="1"
              d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,266.7C840,277,960,267,1080,250.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </Fragment>
  );
}
