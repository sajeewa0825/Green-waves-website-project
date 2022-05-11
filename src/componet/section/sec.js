import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './sec.css'
import Timer from '../timer/timer'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
// import image1 from './image/p1.jpg'
// import image2 from './image/p2.jpg'
import Place from '../section/image/SVG/location.svg'
import clock from '../section/image/SVG/time-clock.svg'



function App() {
    return (
      <div>
          <div class="container">
  <div class="row">
    <div class="col-12">
      <article class="blog-card">
        <div class="blog-card__background">
          <div class="card__background--wrapper">
            <div class="card__background--main">
              <div class="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div class="blog-card__head">
          <span class="date__box">
            <span class="date__day">11</span>
            <span class="date__month">AUG</span>
          </span>
        </div>
        <div class="blog-card__info">
          <h4>PLANTING CAMPAINGE</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
              <p>Quis eu labore esse aliquip ad magna est irure. Do eiusmod dolor laborum ullamco ad in. Qui sunt minim id adipisicing amet quis enim pariatur. Labore ut sunt incididunt sit incididunt cupidatat tempor sit eiusmod reprehenderit. Excepteur elit est do esse commodo reprehenderit amet tempor irure deserunt culpa consectetur. Fugiat tempor sunt labore minim consectetur Lorem ea mollit id ullamco.</p>
                  <div class="container justify-content-center">
                    <div class="row align-items-center">
                    <div class="col-sm-12"><Timer/></div>
                    </div>
              </div>
             <a href="#" class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>          
        </div>
      </article>
    </div>
  </div>
        </div>
        

        <CardGroup>
  <Card>
    <Card.Img variant="top" src={Place} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
            <Card.Img variant="top" src={clock} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
            <Card.Img variant="top" src={Place} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    );
}
export default App