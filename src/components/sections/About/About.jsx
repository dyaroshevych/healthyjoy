import React from 'react';
import { Wrapper } from '../../../hoc';

import { heading1Svg } from '../../../assets/img/headings';
import { aboutJpg } from '../../../assets/img';

import './About.scss';

const About = () => (
    <section className='About' id='about'>
        <Wrapper>
            <h2>Про нас <img src={heading1Svg} alt='' /></h2>
            <div className='About_content'>
                <div>
                    <p>Healthy Joy – це міжнародна франшиза салонів здоров’я та краси, яка наповнює енергією вже 10 років.</p>

                    <p>Healthy Joy Lviv – це один із небагатьох салонів краси у Львові, який надає послуги масажів за східними методиками, з використанням клітинної косметики.</p>

                    <p>Наше особисте місце сили, натхнення і оздоровлення.</p>

                    <p>Головною нашою цінністю є здоров’я клієнта, тому ми вдосконалюємося щодня, аби Ви з радістю поверталися у наш простір любові до себе.</p>
                </div>
                <div className="About_imageContainer">
                    <img className="About_image" src={aboutJpg} alt="" />
                </div>
            </div>
        </Wrapper>
    </section>
);

export default About;