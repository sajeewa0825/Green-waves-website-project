import React from "react";
import "./Wedo.css";

const Wedo = () => {
  return (
    <div>
      <div class=" box">
        <div class="row">
          <div class="col WedoContent">
            <div>
              <p className="wedotopic">
                <span>What We Do</span>
              </p>
              <div className="blacklineWedo"></div>
              {/* <div className="wedoh1">
                <h1> Methenta Gelapena tikak dapan</h1>
              </div> */}
              <div className="wedolorem">
                <p>
                  We are working for create an eco-friendly planet on a global
                  scale.We advocate for the most pressing social and
                  environmental issues of the day. We contest the existing
                  economic and corporate globalization paradigm and advance
                  policies that will contribute to the development of socially
                  equitable and environmentally sustainable society.
                </p>
              </div>
              <div className="wedolorem2">
                <div className="wedolorem2sub">
                  <h5>Volunteer</h5>
                  <p>
                    Volunteer for cleanups in your community. You also can get
                    involved in protecting your watershed, too.
                  </p>
                </div>
                <div className="wedolorem2sub">
                  <h5>Educate</h5>
                  <p>
                    We educate others to understand the importance and value of
                    our natural resources.
                  </p>
                </div>
                <div className="wedolorem2sub">
                  <h5>Conserve water</h5>
                  <p>
                    The less water you use, the less runoff and wastewater that
                    eventually end up in the ocean.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="Wedocard"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
