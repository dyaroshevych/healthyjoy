import React, { useState } from "react";
import Slider from "react-slick";
import { Wrapper } from "../../../hoc";
import { Modal } from "../../UI";

import { heading3Svg } from "../../../assets/img/headings";
import {
  slide1Jpg,
  slide2Jpg,
  slide3Jpg,
  slide4Jpg,
} from "../../../assets/img/services";
import {
  popup_1_1Jpg,
  popup_1_2Jpg,
  popup_1_3Jpg,
  popup_2_1Jpg,
  popup_2_2Jpg,
  popup_2_3Jpg,
  popup_3_1Jpg,
  popup_3_2Jpg,
  popup_3_3Jpg,
  popup_4_1Jpg,
  popup_4_2Jpg,
  popup_4_3Jpg,
} from "../../../assets/img/popup_slider";

import "./Services.scss";

const headings = [
  "Масаж обличчя",
  "Маски",
  "Масаж спини",
  "Натуральна косметика",
];

const SLIDER_SETTINGS = {
  slidesToShow: window.innerWidth <= 640 ? 1 : 2,
  dots: true,
  customPaging: function (i) {
    return (
      <a>
        <h5 className="Services_sliderDotLink">{headings[i]}</h5>
      </a>
    );
  },
};

const POPUP_SLIDER_SETTINGS = {
  dots: false,
  draggable: false,
};

const PRICING = [
  {
    heading: "Масаж обличчя",
    img: [popup_1_1Jpg, popup_1_2Jpg, popup_1_3Jpg],
    text: [
      ['"Гуа-ша"', "800 грн"],
      ["Ліфтинговий “Магія молодості”", "900 грн"],
      ["Скульптурний “Face building”", "900 грн"],
      ["Зони навколо очей “Чарівні очі”", "700 грн"],
    ],
  },
  {
    heading: "Маски",
    img: [popup_2_1Jpg, popup_2_2Jpg, popup_2_3Jpg],
    text: [
      ["Гелеві (алое/троянда)", "230 грн"],
      ["Фіксуюча “Магія молодості”", "260 грн"],
      ["Альгінатні (в асортименті)", "320 грн"],
      ["V.I.P. тканинні (в асортименті)", "700 грн"],
    ],
  },
  {
    heading: "Масаж спини",
    img: [popup_3_1Jpg, popup_3_2Jpg, popup_3_3Jpg],
    text: [
      ['"Гуа-ша"', "850 грн"],
      ["“Ци-сує-тун” (застосування банок)", "950 грн"],
    ],
  },
  {
    heading: "Натуральна косметика",
    img: [popup_4_1Jpg, popup_4_2Jpg, popup_4_3Jpg],
    text: [["Широкий асортимент натуральної оригінальної косметики!", ""]],
  },
];

const ServicesPopupSlider = ({ initialSlide }) => (
  <Slider
    {...POPUP_SLIDER_SETTINGS}
    initialSlide={initialSlide}
    className="Services_popupSlider"
  >
    {PRICING.map(({ heading, img, text }) => (
      <div key={heading}>
        <div className="Services_popupSlide">
          <div className="Services_popupSlideImages">
            <div>
              <div className="Services_popupSlideImageContainer">
                <img src={img[0]} alt="" />
              </div>
              <div className="Services_popupSlideImageContainer">
                <img src={img[1]} alt="" />
              </div>
            </div>
            <div className="Services_popupSlideImageContainer Services_popupSlideImageContainer--tall">
              <img src={img[2]} alt="" />
            </div>
          </div>
          <div className="Services_popupSlideText">
            <h4>{heading}</h4>
            <ul className="Services_popupSlideList">
              {text.map((text_item) => (
                <li key={text_item[0]} className="Services_popupSlideListItem">
                  <h5>{text_item[0]}</h5>
                  <h5>{text_item[1]}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

const Services = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  return (
    <section className="Services" id="services">
      <Modal
        visible={modalVisible}
        toggleVisibility={() => setModalVisible(!modalVisible)}
      >
        <ServicesPopupSlider initialSlide={initialSlide} />
      </Modal>
      <Wrapper>
        <h2>
          Послуги <img src={heading3Svg} alt="" />
        </h2>
        <div className="Services_content">
          <Slider {...SLIDER_SETTINGS} className="Services_slider">
            <div>
              <div
                className="Services_slide"
                onClick={() => {
                  setModalVisible(!modalVisible);
                  setInitialSlide(0);
                }}
              >
                <div className="Services_slideImageContainer">
                  <img
                    className="Services_slideImage"
                    src={slide1Jpg}
                    alt="Масаж обличчя"
                  />
                </div>
                <div className="Services_slideHeadingContainer">
                  <p>Масаж обличчя</p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="Services_slide"
                onClick={() => {
                  setModalVisible(!modalVisible);
                  setInitialSlide(1);
                }}
              >
                <div className="Services_slideImageContainer">
                  <img
                    className="Services_slideImage"
                    src={slide2Jpg}
                    alt="Маски"
                  />
                </div>
                <div className="Services_slideHeadingContainer">
                  <p>Маски</p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="Services_slide"
                onClick={() => {
                  setModalVisible(!modalVisible);
                  setInitialSlide(2);
                }}
              >
                <div className="Services_slideImageContainer">
                  <img
                    className="Services_slideImage"
                    src={slide3Jpg}
                    alt="Масаж спини"
                  />
                </div>
                <div className="Services_slideHeadingContainer">
                  <p>Масаж спини</p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="Services_slide"
                onClick={() => {
                  setModalVisible(!modalVisible);
                  setInitialSlide(3);
                }}
              >
                <div className="Services_slideImageContainer">
                  <img
                    className="Services_slideImage"
                    src={slide4Jpg}
                    alt="Натуральна косметика"
                  />
                </div>
                <div className="Services_slideHeadingContainer">
                  <p>Натуральна косметика</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Wrapper>
    </section>
  );
};

export default Services;
