import React, { Component } from "react";

const Shape = {
  width: "4% !important"
};

class RelatedPost extends Component {
  componentDidMount = () => {
    $(".responsive").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <div className="bg-image">
          <div className="container text-center">
            <h1 className="ignore_3 text-center">
              RELATED P
              <img
                src="./blogdetails/posts_icon.png"
                className="imgs_data"
                style={Shape}
              />
              ST
            </h1>
            <img src="./images/line.png" className="line" />
          </div>
          <div className="container">
            <div className="responsive">
              <div>
                <div className="card m-3">
                  <img
                    className="card-img-top position-relative"
                    src="./blogdetails/relatedpost_1.png"
                    alt="Card image cap"
                  />
                  <span className="card-tag">Lorem Ipsum sit</span>
                  <div className="card-body">
                    <h4 className="card-title1">
                      Lorem ipsum dolor sit conseur adipiscing elit sit amet
                    </h4>
                    <h6 className="card-title-1 pb-0 mb-0 pt-2">
                      OCT, 22, 2019{" "}
                      <span className=" ml-3 john_deo">
                        <img
                          src="./blogdetails/relatedpost_dp.png"
                          className="d-inline-block"
                        />{" "}
                        JOHN DEO
                      </span>
                    </h6>
                    <p className="card-text mt-2">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                    <a href="" className="learn-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card m-3">
                  <img
                    className="card-img-top position-relative"
                    src="./blogdetails/relatedpost_2.png"
                    alt="Card image cap"
                  />
                  <span className="card-tag">Lorem Ipsum sit</span>
                  <div className="card-body">
                    <h4 className="card-title1">
                      Lorem ipsum dolor sit conseur adipiscing elit sit amet
                    </h4>
                    <h6 className="card-title-1 pb-0 mb-0 pt-2">
                      OCT, 22, 2019
                      <span className=" ml-3 john_deo">
                        <img
                          src="./blogdetails/relatedpost_dp.png"
                          className="d-inline-block"
                        />{" "}
                        JOHN DEO
                      </span>
                    </h6>
                    <p className="card-text mt-2">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                    <a href="" className="learn-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card m-3">
                  <img
                    className="card-img-top position-relative"
                    src="./blogdetails/relatedpost_3.png"
                    alt="Card image cap"
                  />
                  <span className="card-tag">Lorem Ipsum sit</span>
                  <div className="card-body">
                    <h4 className="card-title1">
                      Lorem ipsum dolor sit conseur adipiscing elit sit amet
                    </h4>
                    <h6 className="card-title-1 pb-0 mb-0 pt-2">
                      OCT, 22, 2019
                      <span className=" ml-3 john_deo">
                        <img
                          src="./blogdetails/relatedpost_dp.png"
                          className="d-inline-block"
                        />{" "}
                        JOHN DEO
                      </span>
                    </h6>
                    <p className="card-text mt-2">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                    <a href="" className="learn-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card m-3">
                  <img
                    className="card-img-top position-relative"
                    src="./blogdetails/relatedpost_1.png"
                    alt="Card image cap"
                  />
                  <span className="card-tag">Lorem Ipsum sit</span>
                  <div className="card-body">
                    <h4 className="card-title1">
                      Lorem ipsum dolor sit conseur adipiscing elit sit amet
                    </h4>
                    <h6 className="card-title-1 pb-0 mb-0 pt-2">
                      OCT, 22, 2019
                      <span className=" ml-3 john_deo">
                        <img
                          src="./blogdetails/relatedpost_dp.png"
                          className="d-inline-block"
                        />{" "}
                        JOHN DEO
                      </span>
                    </h6>
                    <p className="card-text mt-2">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                    <a href="" className="learn-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card m-3">
                  <img
                    className="card-img-top position-relative"
                    src="./blogdetails/relatedpost_2.png"
                    alt="Card image cap"
                  />
                  <span className="card-tag">Lorem Ipsum sit</span>
                  <div className="card-body">
                    <h4 className="card-title1">
                      Lorem ipsum dolor sit conseur adipiscing elit sit amet
                    </h4>
                    <h6 className="card-title-1 pb-0 mb-0 pt-2">
                      OCT, 22, 2019
                      <span className=" ml-3 john_deo">
                        <img
                          src="./blogdetails/relatedpost_dp.png"
                          className="d-inline-block"
                        />{" "}
                        JOHN DEO
                      </span>
                    </h6>
                    <p className="card-text mt-2">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                    <a href="" className="learn-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card m-3">
                  <img
                    className="card-img-top position-relative"
                    src="./blogdetails/relatedpost_3.png"
                    alt="Card image cap"
                  />
                  <span className="card-tag">Lorem Ipsum sit</span>
                  <div className="card-body">
                    <h4 className="card-title1">
                      Lorem ipsum dolor sit conseur adipiscing elit sit amet
                    </h4>
                    <h6 className="card-title-1 pb-0 mb-0 pt-2">
                      OCT, 22, 2019
                      <span className=" ml-3 john_deo">
                        <img
                          src="./blogdetails/relatedpost_dp.png"
                          className="d-inline-block"
                        />{" "}
                        JOHN DEO
                      </span>
                    </h6>
                    <p className="card-text mt-2">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                    <a href="" className="learn-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="card m-3">
                  <img
                    className="card-img-top position-relative"
                    src="./blogdetails/relatedpost_1.png"
                    alt="Card image cap"
                  />
                  <span className="card-tag">Lorem Ipsum sit</span>
                  <div className="card-body">
                    <h4 className="card-title1">
                      Lorem ipsum dolor sit conseur adipiscing elit sit amet
                    </h4>
                    <h6 className="card-title-1 pb-0 mb-0 pt-2">
                      OCT, 22, 2019
                      <span className=" ml-3 john_deo">
                        <img
                          src="./blogdetails/relatedpost_dp.png"
                          className="d-inline-block"
                        />{" "}
                        JOHN DEO
                      </span>
                    </h6>
                    <p className="card-text mt-2">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore.
                    </p>
                    <a href="" className="learn-more">
                      Read More
                    </a>
                  </div>
                </div>
                {/* <div>
                                    <i className="fa fa-arrow-left text-dark arrow-12"></i>
                                    <i className="fa fa-arrow-right text-dark arrow-13"></i>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .bg-image {
            background-image: url(./blogdetails/Shape_1436.png);
            background-size: cover;
            margin-top: 60px;
            background-repeat: no-repeat;
            background-position: center;
            height: 880px;
          }
          .card-tag {
            bottom: 46%;
            background-color: #19b582;
            width: 38%;
            left: 15px;
            color: white;
            font-size: 13px;
            padding: 8px 10px;
            text-align: center;
            border-radius: 60px;
            position: absolute;
          }
          .card {
            border: 0px !important;
            border-radius: 20px;
            box-shadow: 0px 0px 10px 4px lightgray;
          }
          .slick-dots {
            display: none !important;
          }
          .learn-more {
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 700;
            color: #cd3838;
          }
          .banner_7 {
            margin-top: -100px !important;
          }
          .slick-prev {
            color: block !important;
          }
          .slick-next {
            color: block !important;
          }
          .imgs_data {
            width: 10%;
            margin-top: -8px;
          }
          .ignore_3 {
            width: 100%;
            letter-spacing: 0px;
            font-size: 55px;
            padding-top: 90px;
            color: #345771;
            font-weight: 800;
          }
          .line {
            margin-top: -30px;
            width: 4%;
            margin-left: 30px;
          }
          .card-text {
            color: #8a8a8a;
            font-weight: normal;
            font-size: 14px;
          }
          .card-title1 {
            font-size: 16px !important;
            font-weight: 700 !important;
            color: #355872;
            margin-top: 0px;
            text-transform: uppercase;
          }
          .john_deo {
            color: #020202 !important;
          }
          .card-title-1 {
            font-size: 12px;
            color: #a8abb6;
            font-weight: 700;
          }
          .arrow-12 {
            position: absolute;
            left: 0px;
            top: 48%;
            font-size: 23px;
            z-index: 1000000;
          }
          @media only screen and (max-width: 800px) {
            .ignore_3 {
              font-size: 34px;
            }
          }
          @media only screen and (min-width: 1590px) {
            .bg-image {
              height: 1015px;
            }
          }
          @media only screen and (max-width: 440px) {
            .ignore_3 {
              font-size: 34px;
            }
            .imgs_data {
              width: 8% !important;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default RelatedPost;
