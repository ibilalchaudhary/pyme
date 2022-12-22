import React from "react";

import heroImage from "../../assets/hero_img.svg";
import emoji1 from "../../assets/emoji-1.png";
import emoji2 from "../../assets/emoji-2.png";
import emoji3 from "../../assets/emoji-3.png";
import emoji4 from "../../assets/emoji-4.png";

export default function Hero() {
  return (
    <section className="hp-landing-hero hp-pt-16">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="hp-landing-hero-title hp-text-center hp-mt-64 hp-px-24"
      >
        <h1 className="heading-hero">
          Aquire & Retain Targeted Web3 Users 10x Cheaper
        </h1>

        <p className="h4 hp-font-weight-400 light-dark-color">
          Pyme is the all-in-one platform to target, acquire, retain and scale a
          user base and community in web3.
        </p>
      </div>

      <div className="hp-landing-hero-img hp-mt-96">
        <div className="hp-landing-hero-rectangle hp-bg-warning-1"></div>
        <div className="hp-landing-hero-circle hp-bg-info-1"></div>

        <div className="hp-landing-hero-img-container">
          <div
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="hp-landing-hero-img-item"
            style={{ backgroundImage: "url(" + heroImage + ")" }}
          ></div>
        </div>
      </div>

      <div className="hp-landing-hero-img-left">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          🖖
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          <img src={emoji1} alt="Emoji" />
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          😎
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          <img src={emoji2} alt="Emoji" />
        </div>
      </div>

      <div className="hp-landing-hero-img-right">
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          🌍
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          😇
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          <img src={emoji3} alt="Emoji" />
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="hp-landing-hero-img-emoji"
        >
          <img src={emoji4} alt="Emoji" />
        </div>
      </div>
    </section>
  );
}
