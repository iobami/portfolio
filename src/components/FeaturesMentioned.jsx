import React, { Fragment } from 'react';

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
      <div className="row m-0 notable-mentions">
        <div className="col-sm-11 col-12 mx-auto">
          <div className="row">
            {frames.map(({ title }, index) => (
              <div key={index} className="col-md-12 col-lg-6">
                <div className="notable-mentions-item position-relative">
                  <img src={`https://picsum.photos/600/300?random=${index + 6}`} alt="" />

                  <span className="badge-taggg left">{title}</span>
                  <span className="badge-taggg right">21 / 11 / 2020</span>
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
      </div>
    </Fragment>
  );
}
