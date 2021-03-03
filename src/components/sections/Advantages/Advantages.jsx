import React from 'react';
import { Wrapper } from '../../../hoc';

import { heading2Svg } from '../../../assets/img/headings';
import { leaveSvg, lotusSvg, pebblesSvg } from '../../../assets/img/advantages'

import './Advantages.scss';

const Advantages = () => (
    <section className='Advantages' id='advantages'>
        <Wrapper>
            <h2>Переваги <img src={heading2Svg} alt='' /></h2>
            <div className='Advantages_content'>
                <div className='Advantages_item'>
                    <img className='Advantages_image' src={leaveSvg} alt='Leave' />
                    <p>Натуральна косметика</p>
                </div>
                <div className='Advantages_item'>
                    <img className='Advantages_image' src={lotusSvg} alt='Lotus' />
                    <p>Східні методики</p>
                </div>
                <div className='Advantages_item'>
                    <img className='Advantages_image' src={pebblesSvg} alt='Pebbles' />
                    <p>Майстерність спеціалістів</p>
                </div>
            </div>
        </Wrapper>
    </section>
);

export default Advantages;