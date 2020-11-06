import React from "react";
import Typist from "react-typist";

const bkg1 = {
  backgroundImage: "url(images/wave-shape/wave1.png)",
};
const bkg2 = {
  backgroundImage: "url(images/wave-shape/wave2.png)",
};
const bkg3 = {
  backgroundImage: "url(images/wave-shape/wave3.png)",
};

const Header = () => {
  return (
    <section
      className="section bg-home home-half"
      id="home"
      data-image-src="images/img-1.jpg"
    >
      <div className="bg-overlay"></div>
      <div className="display-table">
        <div className="display-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-white text-center">
                <h1 className="home-title">
                  <Typist>Welcome to Socialize</Typist>
                </h1>
                <p className="padding-t-15 home-desc">
                  Create a classroom or join an existing one to get to know your
                  classmates better
                </p>
                <p className="play-shadow margin-t-30 margin-l-r-auto"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-effect wave-anim">
        <div className="waves-shape shape-one">
          <div className="wave wave-one" style={bkg1}></div>
        </div>
        <div className="waves-shape shape-two">
          <div className="wave wave-two" style={bkg2}></div>
        </div>
        <div className="waves-shape shape-three">
          <div className="wave wave-three" style={bkg3}></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
