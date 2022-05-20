import React from 'react'
import './AboutCard.css'

const AboutCard = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className='aboutcard'></div>
                    </div>
                    <div class="col aboutContent">
                        <div>
                            <p>About us</p>
                            <div className='blacklineAbout'></div>
                        </div>
                        <div className='aboutTopic'>
                            <h1>
                                Methenta gelapena tikak danna
                            </h1>
                        </div>
                        <div className='aboutP'>
                            <p>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                demonstrate form of a document or a typeface without relying on meaningful content.
                                Lorem ipsum may be used as a placeholder before final copy is available.
                                Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-success">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard