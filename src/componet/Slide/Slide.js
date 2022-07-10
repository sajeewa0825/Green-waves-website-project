import React from "react";
import { Carousel } from "react-bootstrap";
import AnimatedText from "react-animated-text-content";
import photo1 from "./SlidePhotos/slide1.jpg";
import photo2 from "./SlidePhotos/slide2.jpg";
import photo3 from "./SlidePhotos/slide3.jpg";
import "./Slide.css";

const Slide = () => {
  return (
    <div>
      <Carousel fade interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={photo2} alt="First slide" />
          <Carousel.Caption>
            <div className="container1 ">
              <div className="col-sm-9 col-md-5">
                <AnimatedText
                  type="words" // animate words or char
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="lights"
                  interval={0.06}
                  duration={0.8}
                  tag="h1"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Plant a tree
                </AnimatedText>
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="wave"
                  interval={0.06}
                  duration={0.8}
                  tag=""
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Plant a tree, grow a flower – let’s give Mother Earth to give
                  them back her power
                </AnimatedText>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo1} alt="Second slide" />

          <Carousel.Caption>
            <div class="container1">
              <div class="col-sm-9 col-md-6">
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="lights"
                  interval={0.06}
                  duration={0.8}
                  tag="h1"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Stop hunting and save wild life
                </AnimatedText>
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="wave"
                  interval={0.06}
                  duration={0.8}
                  tag=""
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Save wild life of endangered animals in the world.
                </AnimatedText>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo3} alt="Third slide" />

          <Carousel.Caption>
            <div class="container1">
              <div class="col-sm-9 col-md-6">
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="lights"
                  interval={0.06}
                  duration={0.8}
                  tag="h1"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Trees are the saviours
                </AnimatedText>
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="throw"
                  interval={0.06}
                  duration={0.8}
                  tag=""
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Save them, plant them, protect them.
                </AnimatedText>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
