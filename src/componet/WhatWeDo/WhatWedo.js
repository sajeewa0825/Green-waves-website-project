import React from "react";
import { Col, Row } from "react-bootstrap";
import "./whatWedo.css";

const WhatWeDo = () => {
  return (
    <div>
      <div class="container-fluid boxWhat">
        <div class="row d-flex justify-content-center m-0 p-0">
          <div class="col-lg-6 WhatWedoContent ">
            <div>
              <p className="wedotopic">
                <span>WHAT WE DO</span>
              </p>
              <div className="blacklineWedo"></div>
              <div>
                <h1 className="Whatwedoh1">
                  {" "}
                  We are working <br />
                  worldwide{" "}
                </h1>
              </div>
              <div>
                <p className="Whatwedolorem">
                  To create an eco-friendly human community while preserving our
                  limited natural resources,adapted to sustainable development
                  for a clean and healthy environment that enhances the quality
                  of life for present and future generations.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 ourteamCol2">
            <div className="WhatWedocard"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid boxGreen">
        <div className="row rowGreen">
          <h1 class="mainH1">What we do for the environment</h1>
        </div>
        <div className="row rowGreen">
          <div className="col-md-4 colgreenbox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/1.png?alt=media&token=b96de2a8-7ab3-4016-b66d-e81d26196ca9"
              class="imgCard"
            ></img>
            <div>
              <h5 class="card-titlecard-title wedoTitle">
                <b>Build healthy cities</b>
              </h5>
              <p className="cardP">
                We build a healthy city that continually creates and improves
                its physical and social environments and expands the community
                resources.
              </p>
            </div>
          </div>

          <div className="col-md-4 colgreenbox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/2.png?alt=media&token=bae85814-9737-416b-b46a-656005cca429"
              class="imgCard"
            ></img>
            <div>
              <h5 class="card-title wedoTitle">
                <b>Protect land and water</b>
              </h5>
              <p className="cardP">
                We protect land and water by educate people on 3R concept that
                will help to create environmental sustainability.
              </p>
            </div>
          </div>
          <div className="col-md-4 colgreenbox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/3.png?alt=media&token=dffd11d2-5935-4bef-b2e1-cdf8c97ce69a"
              class="imgCard"
            ></img>
            <div>
              <h5 class="card-title wedoTitle">
                <b>Tree plantation</b>
              </h5>
              <p className="cardP">
                We plant trees for high volume production of wood, usually by
                planting one type of tree as a monoculture forest.
              </p>
            </div>
          </div>

          <div className="col-md-4 colgreenbox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/4.png?alt=media&token=8b7de3b0-1c32-4824-b6c4-c556568f2d45"
              class="imgCard"
            ></img>
            <div>
              <h5 class="card-title wedoTitle">
                <b>Water sustainability</b>
              </h5>
              <p className="cardP">
                A nation that can be water self-sufficient ensuring there is
                enough water to meet multiple needs, from agriculture to
                municipal and industrial.
              </p>
            </div>
          </div>

          <div className="col-md-4 colgreenbox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/5.png?alt=media&token=7057737a-349d-41de-a4df-c11955b0482d"
              class="imgCard"
            ></img>
            <div>
              <h5 class="card-title wedoTitle">
                <b>Animal safety</b>
              </h5>
              <p className="cardP">
                We Protect animals as well as the oceans, forests, and
                grasslands they inhabit— will help safeguard the future for all
                species.
              </p>
            </div>
          </div>

          <div className="col-md-4 colgreenbox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/6.png?alt=media&token=97645cb4-5b57-4021-a3c3-2a73c70aec1a"
              class="imgCard"
            ></img>
            <div>
              <h5 class="card-title wedoTitle">
                <b>Biodiversity</b>
              </h5>
              <p className="cardP">
                We work with local communities in supporting for policy change
                and implement local solutions to protect forests and
                biodiversity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid boxGreen">
        <div className="row rowGreen">
          <div className="col mainGrid">
            <div>
              <div>
                <br />
                <h1 class="mainH1">What we do for the environment</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="cardMain">
          <div className="container">
            <div className="row ">
              <div className="col colgreenbox">
                <div className="col-sm-4 d-flex">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/1.png?alt=media&token=b96de2a8-7ab3-4016-b66d-e81d26196ca9"
                    class="imgCard"
                  ></img>
                  <div>
                    <h5 class="card-title wedoTitle">
                      <b>Build healthy cities</b>
                    </h5>
                    <p className="cardP">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores maxime{" "}
                    </p>
                  </div>
                </div>

                <div className="col">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/2.png?alt=media&token=bae85814-9737-416b-b46a-656005cca429"
                    class="imgCard"
                  ></img>
                </div>
                <div className="col">
                  <h5 class="card-title">
                    <b>Protect land and water</b>
                  </h5>
                  <p className="cardP">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime{" "}
                  </p>
                </div>

                <div className="col">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/3.png?alt=media&token=dffd11d2-5935-4bef-b2e1-cdf8c97ce69a"
                    class="imgCard"
                  ></img>
                </div>
                <div className="col">
                  <h5 class="card-title">
                    <b>Tree plantation</b>
                  </h5>
                  <p className="cardP">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime{" "}
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="row">
              <div className="col-md-1">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/4.png?alt=media&token=8b7de3b0-1c32-4824-b6c4-c556568f2d45"
                  class="imgCard"
                ></img>
              </div>
              <div className="col-md-3">
                <h5 class="card-title">
                  <b>Water sustainability</b>
                </h5>
                <p className="cardP">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores maxime{" "}
                </p>
              </div>

              <div className="col-md-1">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/5.png?alt=media&token=7057737a-349d-41de-a4df-c11955b0482d"
                  class="imgCard"
                ></img>
              </div>
              <div className="col-md-3">
                <h5 class="card-title">
                  <b>Animal safety</b>
                </h5>
                <p className="cardP">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores maxime{" "}
                </p>
              </div>

              <div className="col-md-1">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/green-waves-f1d66.appspot.com/o/6.png?alt=media&token=97645cb4-5b57-4021-a3c3-2a73c70aec1a"
                  class="imgCard"
                ></img>
              </div>
              <div className="col-md-3">
                <h5 class="card-title">
                  <b>Biodiversity</b>
                </h5>
                <p className="cardP">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores maxime{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class=" boxWhatSec"></div>
    </div>
  );
};

export default WhatWeDo;
