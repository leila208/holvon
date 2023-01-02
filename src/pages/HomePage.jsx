import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
function HomePage() {
    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
           autoplay={{
           delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="main">
              <div className="main-text">
                <h5>Dadlı və ləzzətli</h5>
                <h1>Yeni reseptlər</h1>
                <h3>Yüksək keyfiyyət və ləziz dad</h3>
                <div className="main-btns">
                  <div className="main-btn">
                    {/* <Link to="/blog">Alış-veriş edin</Link> */}
                    Alış-veriş edin
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

{/* 
          <SwiperSlide>
            <div className="main2">
             
            </div>
          </SwiperSlide> */}
        </Swiper>

        <div className="wrapper">
          <div className="shippings">
            <div className="shipping">
              <div className="shipping-img">
                <i className="fa-solid fa-plane-departure" />
              </div>
              <div className="shipping-text">
                <p>Pulsuz çatdırılma</p>
                <p>Şəhərdaxili pulsuz</p>
              </div>
            </div>
            <div className="shipping">
              <div className="shipping-img">
                <i className="fa-solid fa-wallet" />
              </div>
              <div className="shipping-text">
                <p>Pulun qaytarılması</p>
                <p>Nağd ödəniş</p>
              </div>
            </div>
            <div className="shipping">
              <div className="shipping-img">
                <i className="fa-solid fa-gift" />
              </div>
              <div className="shipping-text">
                <p>Xüsusi hədiyyə kartı</p>
                <p>Xüsusi bonuslar</p>
              </div>
            </div>
            <div className="shipping">
              <div className="shipping-img">
                <i className="fa-solid fa-headset" />
              </div>
              <div className="shipping-text">
                <p>Texniki dəstək</p>
                <p>7/24 dəstək</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default HomePage