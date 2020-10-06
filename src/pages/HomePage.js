import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import {Carousel} from "react-bootstrap";
import slide1 from '../images/slide1.jpg';
import gif from '../images/arrow.gif';
import slide2 from '../images/slide2.jpg';
import slide5 from '../images/slide5.jpg';
import Cards from "../components/Cards";


export default () => (
  <div>
    <Layout>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <hr/>
      <div className="text-center">

        <h1 className="m-text5 t-center">
          تخفیف واقعی
        </h1>
        <h3 style={{color: 'red'}} className=" t-center">
          تخفیف های ویژه (محصولات ارگانیک) پرداخت آنلاین
          <br/><img src={gif} width="10%"/>
        </h3>
      </div>
      <hr/>
      <div className="container">
        <Cards/>
        <br/>
        <center>
          <h3>توجه مهم : بدون خرید کد تخفیف شما نمیتوانید از تخفیفات استفاده کنید</h3>
        </center>
        <br/>

      </div>


    </Layout>
  </div>
)
