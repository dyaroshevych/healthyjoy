import React from 'react';
import { Link } from 'react-scroll';
import { Wrapper } from '../../../hoc';

import { instagramSvg, facebookSvg } from '../../../assets/img/social'
import { arrowSvg } from '../../../assets/img'

import './ContactInfo.scss';

const ContactInfo = () => (
    <section className='ContactInfo' id='contact-info'>
        <Wrapper>
            <h2>Контакти</h2>
            <div className='ContactInfo_content'>
                <ul className='ContactInfo_list'>
                    <li className='ContactInfo_item'>Місто Львів,  вулиця Драгоманова, 26</li>
                    <li className='ContactInfo_item'>Телефон: 095 300 2433</li>
                    <li className='ContactInfo_item'>Графік роботи: понеділок- п’ятниця 10:00-22:00</li>
                </ul>

                <ul className='ContactInfo_list'>
                    <li className='ContactInfo_item'>Ми у соціальних мережах:</li>
                    <li className='ContactInfo_item'><a href='instagram.com'>Instagram <img src={instagramSvg} alt='Instagram' /></a></li>
                    <li className='ContactInfo_item'><a href='facebook.com'>Facebook <img src={facebookSvg} alt='Facebook' /></a></li>
                </ul>
                <Link
                    to='navigation'
                    smooth
                    >
                    <img className='ContactInfo_linkToTop' src={arrowSvg} alt='page up' />
                </Link>
            </div>
        </Wrapper>
    </section>
);

export default ContactInfo;