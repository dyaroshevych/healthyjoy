import React from 'react';
import { Wrapper } from '../../../hoc';

import { heading4Svg } from '../../../assets/img/headings';
import { subscription1Jpg, subscription2Jpg, subscription3Jpg, subscription4Jpg } from '../../../assets/img/subscription'

import './Subscription.scss';

const Subscription = () => (
    <section className='Subscription' id='subscription'>
        <Wrapper>
            <h2>Абонементи <img src={heading4Svg} alt='' /></h2>
            <div className='Subscription_content'>
                <section className='Subscription_section'>
                    <article className='Subscription_article'>
                        <h3>Обличчя</h3>
                        <ul>
                            <li>light (6 процедур): 4000 грн</li>
                            <li>medium (8 процедур): 5000 грн</li>
                            <li>maximum (10 процедур): 5850 грн</li>
                        </ul>
                    </article>
                    <div className='Subscription_imageContainer'>
                        <img className='Subscription_image' src={subscription1Jpg} alt='Обличчя' />
                    </div>
                </section>
                <section className='Subscription_section'>
                    <article className='Subscription_article'>
                        <h3>Спина</h3>
                        <ul>
                            <li>light (6 процедур): 4290 грн </li>
                            <li>medium (8 процедур): 5330 грн</li>
                            <li>maximum (10 процедур): 5850 грн</li>
                        </ul>
                    </article>
                    <div className='Subscription_imageContainer'>
                        <img className='Subscription_image' src={subscription2Jpg} alt='Спина' />
                    </div>
                </section>
                <section className='Subscription_section'>
                    <article className='Subscription_article'>
                        <h3>Обличчя + спина</h3>
                        <ul>
                            <li>(12 процедур): 7000 грн</li>
                        </ul>
                    </article>
                    <div className='Subscription_imageContainer'>
                        <img className='Subscription_image' src={subscription3Jpg} alt='Обличчя + спина' />
                    </div>
                </section>
                <section className='Subscription_section'>
                    <article className='Subscription_article'>
                        <h3>Сімейний</h3>
                        <ul>
                            <li>medium (25 процедур): 13650 грн</li>
                            <li>maximum (45 процедур): 21645 грн</li>
                        </ul>
                    </article>
                    <div className='Subscription_imageContainer'>
                        <img className='Subscription_image' src={subscription4Jpg} alt='Сімейний' />
                    </div>
                </section>
            </div>
        </Wrapper>
        <div className="Subscription_footer">
            <p>Термін дії абонементів не обмежений в часі</p>
        </div>
    </section>
);

export default Subscription;