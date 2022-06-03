import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className='container'>
            <div>
                <div className='row rowangle'>
                    <div className='blackline col-1 col-md-1 col-xl-1 col-lg-1 col-sm-1 col-xxl-1'></div>
                    <p className='col-10 col-md-10 col-xl-10 col-lg-10 col-sm-10 col-xxl-10'>PROJECT WE HAVE DONE</p>
                    <div className='col-1 blacklineRight col-md-1 col-xl-1 col-lg-1 col-sm-1 col-xxl-1'></div>
                </div>
                <div className='row content'>
                    <h2>
                        Mekata monawa hari dapan
                    </h2>
                </div>
            </div>

            <section className="cards">
                <article className="card card--2">
                    <div className="card__info-hover">
                    </div>
                    <div className="card__img" />
                    <a href="#" className="card_link">
                        <div className="card__img--hover" />
                    </a>
                    <div className="card__info">
                        <span className="card__category"> Travel</span>
                        <h3 className="card__title">Discover the sea</h3>
                    </div>
                </article>

                <article className="card card--1">
                    <div className="card__img" />
                    <a href="#" className="card_link">
                        <div className="card__img--hover" />
                    </a>
                    <div className="card__info">
                        <span className="card__category"> Recipe</span>
                        <h3 className="card__title">Crisp Spanish to</h3>
                    </div>
                </article>



                <article className="card card--2">
                    <div className="card__info-hover">
                    </div>
                    <div className="card__img" />
                    <a href="#" className="card_link">
                        <div className="card__img--hover" />
                    </a>
                    <div className="card__info">
                        <span className="card__category"> Travel</span>
                        <h3 className="card__title">Discover the sea</h3>
                    </div>
                </article>

            </section>


        </div>

    )

}

export default Card