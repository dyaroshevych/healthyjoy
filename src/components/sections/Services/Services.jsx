import React from 'react';
import { Wrapper } from '../../../hoc';

import { heading3Svg } from '../../../assets/img/headings';

import './Services.scss';

const Services = () => (
    <section className='Services' id='services'>
        <Wrapper>
            <h2>Послуги <img src={heading3Svg} alt='' /></h2>
            <div className='Services_content'>
            </div>
        </Wrapper>
    </section>
);

export default Services;