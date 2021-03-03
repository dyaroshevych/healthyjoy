import React from 'react';
import { Wrapper } from '../../../hoc';

import { heading2Svg } from '../../../assets/img/headings';

import './Advantages.scss';

const Advantages = () => (
    <section className='Advantages' id='advantages'>
        <Wrapper>
            <h2>Переваги <img src={heading2Svg} alt='' /></h2>
            <div className='Advantages_content'>
            </div>
        </Wrapper>
    </section>
);

export default Advantages;