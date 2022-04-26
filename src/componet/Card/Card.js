import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className='container'>
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