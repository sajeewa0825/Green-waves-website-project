import React from "react";
import "./BlogPage.css";
import Img1 from "./pic/image-01.jpg";
import Img2 from "./pic/image-02.jpg";
import Img3 from "./pic/image-03.jpg";
import Img4 from "./pic/image-04.jpg";

const home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div class="header">
          <h3 className="BlogHeaderH3">Green Waves</h3>
        </div>

        <div class="row">
          <div className="col-md-9">
            <div class="leftcolumn">
              <div class="Card_Blog">
                <h2 className="BlogHeaderH2">Save The Bees</h2>
                <h5>18 April 2022</h5>
                <img src={Img1} />
                <p>
                  The sad fact is pollinators are disappering before our
                  eyes-especially honeybees and bumble bees.Why are bees dying?
                </p>

                {/* Read more popup button lable_1 */}
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal_1"
                >
                  Read More
                </button>
              </div>
              <div class="Card_Blog">
                <h2 className="BlogHeaderH2">
                  Learning From Ecologies Of Care
                </h2>
                <h5>24 February 2022</h5>
                <img src={Img2} />
                <p>
                  The COVID-19 pandemic has seemingly brought the world to a
                  standstill.
                </p>

                {/* Read more popup button lable_2  */}

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal_2"
                >
                  Read More
                </button>
              </div>
              <br />
            </div>
          </div>
          <div className="col-md-3">
            <div class="header">
              <h3 className="BlogHeaderH3">Latest Articles</h3>
            </div>
            <div class="rightcolumn">
              <div class="Card_Blog">
                <h2 className="BlogHeaderH2">
                  Why Are Monarch Butterflies Important
                </h2>
                <h5>13 December 2021</h5>
                <img src={Img3} />

                {/* Read more popup button lable_3 */}
                <button
                  type="button"
                  class="btn mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal_3"
                >
                  Read More
                </button>
              </div>
              <br />
              <div class="Card_Blog">
                <h2 className="BlogHeaderH2">
                  How Eco Friendly Are Cruise Ships?
                </h2>
                <h5>08 August 2021</h5>
                <img src={Img4} />

                {/* Read more popup button lable_4 */}
                <button
                  type="button"
                  class="btn mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal_4"
                >
                  Read More
                </button>
              </div>
              <br />
              <div class="formBlog">
                <form
                  action="mailto:someone@example.com"
                  method="post"
                  enctype="text/plain"
                >
                  <h2 className="BlogHeaderH2">Submit a comment</h2>
                  <label for="name">Name:</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    size="10px"
                    maxlength="20px"
                  />
                  <br />
                  <label for="email">Email:</label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    size="10px"
                    maxlength="20px"
                  />
                  <br />
                  <label for="comment">Comment:</label>
                  <br />
                  <textarea
                    id="comment"
                    name="comment"
                    rows="4"
                    cols="13"
                    maxlength="30px"
                  ></textarea>
                  <br />
                  <input type="submit" value="Post" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="wrapper">
            <h2 className="BlogHeaderH2">Follow Us</h2>
            <a href="#" class="icon facebook">
              <div class="tooltip">Facebook</div>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </a>
            <a href="#" class="icon twitter">
              <div class="tooltip">Twitter</div>
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </a>
            <a href="#" class="icon instagram">
              <div class="tooltip">Instagram</div>
              <span>
                <i class="fab fa-instagram"></i>
              </span>
            </a>
            <a href="#" class="icon youtube">
              <div class="tooltip">Youtube</div>
              <span>
                <i class="fab fa-youtube"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* lable1 */}

      <div
        class="modal fade"
        id="exampleModal_1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel_1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel_1">
                Bees
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="read-more-cont">
                <img src={Img1} width="100%" />
                <h3 className="BlogHeaderH3">Save The Bees</h3>
                <p>
                  The sad fact that is pollinators are disappearing before our
                  eyes-especially honeybees and bumble bees.Why are bees dying?
                  Unfortunately,pollinator health points to a few factors
                  including one major one we cannot ignore-pesiticides These
                  toxic chemicals are killing bees outright, weaking bees'
                  immune systems and harming thier ability to gather food and
                  reproduce. Add in parasities and diseases and it's no wonder
                  bees are facing alarming declines.Bee health is vital to a
                  healthy food system.
                </p>
                <h4 className="BlogPopup_H4">Why are Honey Bees dying?</h4>
                <p>
                  Beekeepers across the country are reporting extreme honey bee
                  colony losses.For two years in a row,they have seen the
                  highest annual losses!in 2019,beekeepers lost 40% of their
                  colonies. In 2020,that number increased to a little over 45%.
                  These startling statistics show that even pollinators that are
                  managed by professional beekeeprs are at risk!
                </p>
                <p>
                  It's important to remember that honeybee loss each winter is
                  normal. But over the last 15 years, beekeepers began seeing a
                  substantially increased number of mortalities - inconsistent
                  with typical honeybee loss.
                </p>
                <h4 className="BlogPopup_H4">Threat To Honey Bees</h4>
                <p>
                  Honeybees play an important role in our food system.They're
                  instrumental in the pollination of over 100 crops. This
                  includes fruits and vegetables. But honeybees are also
                  importantfor speices,nuts and herbs- and plants needed for
                  medicines.
                  <br />
                  <br />
                  But these pollinators are under attack from pesticides used on
                  farms and agricultural lands throughout the country. Some of
                  these toxic chemicals can be absorbed by the plants.Their
                  presence in nectar or pollen can be a threat to the bees.These
                  chemicals can alter bees' brains and can ultimately lead to
                  paralysis and death.
                  <br />
                </p>
                <ul>
                  <li>Pollinator Decline statistics</li>
                  <p>
                    Honeybees aren't the only pollinators facing
                    declines.Scientists have warned we are nearing an insect
                    apocalypse.If we lose pollinators and other insects from the
                    food chain,it would be catastrophic not only for humans but
                    for wildlife as well.
                  </p>
                  <li>Bee Declines statistics</li>
                  <p>
                    beekeepers began noticing increased honey bee declines in
                    2006, they began to track the deline through Bee Informed
                    Partnership.This national survey keeps track of the annual
                    losses to understand how widespread the problem is.
                  </p>
                </ul>
                <h4 className="BlogPopup_H4">How To Save The Bees</h4>
                <p>
                  Are you concerned with population decline?If so,You're not
                  alone.At Friends of the Earth, we work day in and day out to
                  save our vital pollinators.But we need help from concerned
                  people like you.Here are a few ways that you can help save the
                  bees.
                </p>
                <ul>
                  <li>Plant a Bee garden</li>
                  <p>
                    habitats are dwindling. They need a safe place to call home
                    and have a variety of food sources. When you plant a garden
                    rich in pollen and nectar, you are providing a safe space
                    for bees.
                  </p>
                  <li>Go Chemical Free</li>
                  <p>
                    We know that pesticides harm and kill bees. If you avoid
                    treating your lawn and garden with pollinator-toxic
                    chemicals, you can provide them with a place to thrive.
                  </p>
                  <li>Provide Homes For Native Bees</li>
                  <p>
                    There are many bee species that are ground-dwelling solitary
                    bees. They live in wood,stems,and in the ground. Offer sunny
                    soil,wooden blcoks,and bundles of bamboo in your garden for
                    the solitary bees that need a healthy place to call home.
                  </p>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* label_2 */}

      <div
        class="modal fade"
        id="exampleModal_2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">
                Ecologies
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="read-more-cont">
                <img src={Img2} width="100%" />
                <h3 className="BlogHeaderH3">
                  Learning From Ecologies Of Care
                </h3>
                <p>
                  The COVID-19 pandemic has seemingly brought the world to a
                  standstill. Amidst the shutdown, pain from the growing loss of
                  life and livelihoods has brought with it antiipatory grief-not
                  only for what is happening, but for what may still come. In
                  the immediate, supporting frontline workers is of utmost
                  priority, while quarantines and social distancing have become
                  our new norm.
                </p>
                <p>
                  As we face this crisis, there are important lessons we can
                  learn to build the future we want to see as we recover.One of
                  those lessons should be that transforming our relationship
                  with the natural world may be our best bet for safeguarding
                  our future.
                </p>
                <h4 className="BlogPopup_H4">
                  "Transforming our relationship with the natural world may be
                  our best bet for safeguarding our future"
                </h4>
                <p>
                  Deforestation,largely driven by the production of industrial
                  agricultural commodities, is the second-largest source of
                  global greenhouse gas emissions.To operate expansive
                  monoculture plantations, forests are felled, peatlands
                  drained, and roads built to facilitate extraction.Now we are
                  learning of yet another consequence of
                  deforestation:diseases-along with greenhouse gas emissions-are
                  being released from this devastation.
                </p>
                <p>
                  But forests and our relationship with them shouldn't be
                  examined solely as a root cause of these crises.Transforming
                  our relationship with the natural world can lead to more
                  fulfilling lives and healthier societies.
                </p>
                <p>
                  Forests serve as massive carbon sinks,sequestering CO2 from
                  being released into the atmosphere and heating our planet,thus
                  mitigating the impacts of even greater disasters from
                  wildfires to hurricanes to droughts.It is estimated that
                  around a quater of all medicines come from forests.Learning
                  from these deep resevoirs of biodiversity and ecological
                  wisdom can allow us to various diseases and ailments.
                </p>
                <h4 className="BlogPopup_H4">
                  "The natural world-forests,wildlife,and biodiversity-is not
                  somehow separate from us as humans,but integral to our own
                  survival"
                </h4>
                <p>
                  Instead of continuing further destruction of our home through
                  unfettered extraction and unscrupulous bailouts for polluting
                  industries,let's remember that our individual fates are
                  profoundly intertwined with the greater world we inhabit.
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lable_3 */}
      <div
        class="modal fade"
        id="exampleModal_3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel_3"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel_3">
                Butterflies
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="read-more-cont">
                <img src={Img3} width="100%" />
                <h3 className="BlogHeaderH3">
                  Why Are Monarch Butterflies Important
                </h3>
                <p>
                  They are easy to pictures-one of the most recognizable
                  butterflies on Earth.Their beautiful orange wings laced with
                  black lines that are delicately tipped along the edges with
                  white dots.It's impossible not to recognize these famous
                  fluttering insects. But why are monarch butterflies
                  important?Moarch butterflies offer the world much more than
                  just their beauty. Monarch butterflis are pollinators.
                  Pollinators like monarchs play a vital role in the natural
                  ecosystem and our food system.Without pollinators, the world
                  around us would not be the same.But sadly,for many years the
                  population of many pollinators has been rapidly declining.
                </p>
                <h4 className="BlogPopup_H4">
                  What Do Monarch Butterflies Do For The Environment?
                </h4>
                <p>
                  As previously mentioned,monarchbutterflies are pollinators.
                  Like bees,monarch butterflies help flowering plants through
                  the pollination process.When they stop on a flower to sip on
                  the nectar,the flower dusts on the monarch is tranferred to
                  the next plant-leading to pollination.
                </p>
                <p>
                  But aside from pollinating calendula,yarrow,and other
                  flowers,monarhs play another important role in the
                  environment.They are a critical part of the food web.That's
                  right-monarches are a food source for birds,other insects,ad
                  small animals.
                </p>
                <h4 className="BlogPopup_H4">
                  Where Do Monarch Butterflies Live?
                </h4>
                <p>
                  Monarch butterflies can be found aross the globe.They live in
                  North,South and Central America. They also have been found in
                  Australia,Western Europe, India and some Pacific Islands.
                </p>
                <p>
                  Within the United States,monarch butterflies travel extensive
                  distances between their eastern population and the western
                  population.
                </p>
                <p>
                  The eastern population of monarch butterflies also travel
                  extensive distances. Their summer grounds also reach southern
                  Canada,but instead of migrating to Mexico, this population
                  migrates to coastal California.
                </p>
                <h4 className="BlogPopup_H4">Monarch Lifecycle</h4>
                <h4 className="BlogPopup_H4">
                  The monarch butterfly has four stages of its life cycle:
                </h4>
                <ul>
                  <li>stage 1:The egg</li>
                  <li>stage 2:The caterpillar</li>
                  <li>stage 3:The pupa(chrysalis)</li>
                  <li>stage 4:The butterfly</li>
                </ul>
                <p>
                  The monarchs that are making the great migration to warmer
                  climates are the great grandchildern of the ones who
                  previously made the long journey!
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* lable_4 */}
      <div
        class="modal fade"
        id="exampleModal_4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel_4"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel_4">
                Cruise Ships
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="read-more-cont">
                <img src={Img4} width="100%" />
                <h3 className="BlogHeaderH3">
                  How Eco Friendly Are Cruise Ships?
                </h3>
                <p>
                  If you're like two thirds of the travelers aross the globe,you
                  want to enjoy the perks of a beautiful vaction while still
                  being conscious of how it impacts the planet.Taking a cruise
                  is appealing for many because of the way they are
                  marketed.From the outside they sound like a glorious
                  vacation;the the floating cities have everything you need
                  right at your fingertips.From top of the line restaurants to
                  on-board entertainment, blue seas to spectacular sunset
                  views,they really seem to have it all.But cruises are not eco
                  friendly in the slightest.
                </p>
                <p>
                  There is no such thing as an eco cruise with these massive
                  ships.What you don't see on the cruise company's websites,in
                  their advertisements,and onboard is the hidden truth-cruises
                  are devastating our environment,oceans,sea life,and coastal
                  communities.
                </p>
                <h4>Cruise Ships Pollution Facts</h4>
                <p>
                  Cruise ships are floating cities that fill our air and water
                  with pollutants.Here are a few quick cruise pollution facts to
                  illustrate just how non-eco friendly this industry truly is.
                </p>
                <ul>
                  <li>Cruise engines run 24/7</li>
                  <li>
                    A mid-sized cruise ship can use 150 tons of fuel daily;they
                    burn in gallons per mile,not miles per gallon
                  </li>
                  <li>
                    cruise use the cheapest, dirtiest fuel on the market then
                    use scrubbers to clean smokestacks
                  </li>
                  <li>
                    Scrubber waste water is then dumped directly into the oceans
                  </li>
                  <li>
                    Raw sewage and graywater can also be dumped into the ocean
                    in most places
                  </li>
                  <li>
                    Cruise ships increase ocean noise,distrupting natural
                    behaviors of oceanic wildlife
                  </li>
                  <li>They spread bacteria and viruses.</li>
                </ul>
                <h4>Reasons To Never Take A Cruise</h4>
                <ol>
                  <li>They pollute coastal communities</li>
                  <li>Excessive air pollution</li>
                  <li>Dump human waste in the ocean</li>
                  <li>Destruction of coastel reefs</li>
                  <li>They perpetuate animal cruetly</li>
                </ol>
                <h4>Are There Any Eco Friendly Cruises?</h4>
                <p>
                  The easy and obvious answer is no-there are no eco friendly
                  big cruises.Even the most environmentally friendly cruises
                  still perpetuate bad behavior towards the planet, coastal
                  communities, and animals.
                </p>
                <p>
                  With so many other travel options available,consider other
                  green tourism options instead of a cruise.The planet and all
                  its inhabitants will Thank You!
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
