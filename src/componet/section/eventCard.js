import React from "react";
import Place from '../section/image/SVG/location.svg'
import clock from '../section/image/SVG/alarm-clock.svg'
import Calendar from'../section/image/SVG/calendar.svg'

const eventCard = () => {
    return (
        <div>
                <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-md-center">
  <div class="col">
    <div class="card h-100 bg-light border-light">
              <img src={Place} class="card-img-top" alt="..." width={50} height={50} style={{marginTop:5}}/>
      <div class="card-body">
                <h4 class="card-title">Place</h4>
                <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-light border-light">
     <img src={clock} class="card-img-top" alt="..." width={50} height={50} style={{marginTop:5}}/>
      <div class="card-body">
                <h4 class="card-title">Time</h4>
                <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-light border-light">
      <img src={Calendar} class="card-img-top" alt="..." width={50} height={50} style={{marginTop:5,}}/>
      <div class="card-body">
                <h4 class="card-title">Date</h4>
                <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default eventCard