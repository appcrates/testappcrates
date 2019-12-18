import React, { Component } from "react";
import Instafeed from "instafeed.js";

const Shape = {
  width: "6% !important"
};

class Footer extends Component {
  componentDidMount = () => {
    var userFeed = new Instafeed({
      get: "user",
      userId: "14562296571",
      clientId: "e5ac6df224d338e950fe848c4192ce40",
      accessToken: "14562296571.1677ed0.26cf3e0acecd44628f932b41cd746563",
      resolution: "standard_resolution",
      template:
        '<div class="col-md-2 mt-2 col-6"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="layer_img w-100"/></a></div>',
      sortBy: "most-recent",
      limit: 7,
      links: false
    });
    userFeed.run();
  };

  render() {
    return (
      <div>
        <div className="banner_7">
          <div className="container pt-lg-5">
            <div className="row mt-5 pl-lg-5 ml-lg-4">
              <div className="col-lg-7">
                <h4 className="text-white join_us_1">INSTAGRAM</h4>
                <h1 className="ignore_3 community text-white">
                  #BETTERT
                  <img
                    src="./images/Layer_121.png"
                    className="imgs_data"
                    style={Shape}
                  />
                  GETHER
                </h1>
                <img src="./images/Shape_1396.png" className="shape" />
              </div>
              <div className="col-lg-5 text-center mt-3">
                <button className="bnt">
                  <i className="fa fa-instagram font-weight-bold"></i> FOLLOW US
                </button>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <div className="row" id="instafeed"></div>
          </div>
          <div className="container container_1 pt-5">
            <div className="border_top"></div>
            <div className="row pl-lg-5 ml-lg-4">
              <div className="col-lg-5">
                <h4 className="text-white join_us_1">JOIN US!</h4>
                <h1 className="ignore_2 community text-white">
                  C<img src="./images/Layer_121.png" className="imgs_data mr-1" />
                  MMUNITY
                </h1>
                <img src="./images/Shape_1396.png" className="shape" />
                <div className="row">
                  <div className="col-lg-7 pr-0">
                    <h5 className="text-white font-weight-bold mb-0 chosen_1">
                      MEMBERSHIP DUES ARE
                    </h5>
                    <p className="text-white pt-0 chosen">
                      Members are selectively chosen.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <button className="bnt_3">$67/MONTH</button>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="mt-3 pl-md-5">
                  <input
                    type="text"
                    className="form-contro inpt mt-2"
                    name=""
                    placeholder="Enter Your Email Address"
                  />
                  <button className="bnt_2 mt-3">JOIN US COMMUNITY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 mt-3 pt-1">
          <div className="row">
            <div className="col-md-10 m-auto pl-gl-0 pr-lg-0">
              <div className="row brde pb-4">
                <div className="col-sm-3 col-7">
                  <img src="./images/footer_logo.png" className="w-100" />
                </div>
                <div className="col-sm-9 mt-3 pr-0">
                  <div className="float-right pr-2">
                    <ul className="nav">
                      <li className="nav-item pl-md-4 pl-0">
                        <h6 className="nav-link">Home</h6>
                      </li>
                      <li className="nav-item pl-md-4 pl-0">
                        <h6 className="nav-link" href="#">
                          Why This Project?
                        </h6>
                      </li>
                      <li className="nav-item pl-md-4 pl-0">
                        <h6 className="nav-link" href="#">
                          Our Values
                        </h6>
                      </li>
                      <li className="nav-item pl-md-4 pl-0">
                        <h6 className="nav-link" href="#">
                          Application
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-9 pl-md-0 pl-4">
                    <div className="copy-right_1 pt-4">
                      <p className="mb-0 pb-0 mt-4 float-left copy_right">
                        &#9400; 2019{" "}
                        <span className="better">BETTER TOGETHER.</span> All
                        Right Reserved.{" "}
                      </p>
                      <div className="float-left ml-3 mt-4 brdss">
                        Privacy Policy
                      </div>
                      <div className="mt-4 ml-3 float-left brdss">
                        Term and Conditions
                      </div>
                    </div>
                  </div>
                  <div className="col-3 mt-4 pt-3 pl-lg-4">
                    <div className="text-right">
                      <div className="row mt-md-0 mt-3 ml-lg-2">
                        <div className="col-md-5"></div>
                        <div className="col-md-3 mt-md-0 mt-4 pt-md-0 pt-2">
                          <a href="https://www.instagram.com/we_are_bettertogether/">
                            <div className="msg">
                              <img
                                src="./images/Layer_44.png"
                                className="imgssss"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-2">
                          <a href="mailto:andrew@bettertogethermm.com">
                            <div className="msg">
                              <img
                                src="./images/Shape_1419.png"
                                className="imgssss"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .copy-right_1 {
            font-size: 13px;
          }
          .bnt {
            height: 58px;
            width: 176px;
            font-size: 19px;
            font-weight: 800;
            background-color: #fbde06;
            border: 1px solid #fbde06;
            border-radius: 30px;
            box-shadow: 0px 0px 10px 2px #0d827f;
          }
          .banner_7 {
            background-image: url(./images/join_video.png);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            padding-bottom: 100px;
            margin-top: -90px;
            padding-top: 70px;
          }
          .border_top {
            border-top: 3px solid #36ab9e;
            padding-top: 50px;
            width: 80%;
            margin: 0 auto;
          }
          .msg {
            box-shadow: 0px 3px 11px 3px #e6e6e6;
            height: 40px;
            width: 40px;
            text-align: center;
            border-radius: 50%;
          }
          .brdss {
            border-left: 2px solid #e0e0e0;
            padding-left: 15px;
            font-weight: 600;
            letter-spacing: 0.7px;
            cursor: pointer;
            color: #696969;
          }
          .imgs_data {
            width: 8%;
            margin-top: -8px;
          }
          .brdss:hover {
            color: #ca3535 !important;
          }
          .copy_right {
            font-weight: 600;
            letter-spacing: 1.06px;
            color: #696969;
          }
          .join_us_1 {
            font-size: 21px;
            margin-left: 5px;
            margin-top: 1px;
          }
          .inpt {
            border-radius: 50px !important;
            padding: 12px 22px !important;
            width: 74% !important;
            background-color: white !important;
            border: 1px solid white;
          }
          .brde {
            border-bottom: 1px solid #ececec;
            padding-bottom: 13px;
          }
          .bnt_2 {
            background: #fbde06;
            padding: 12px 20px;
            border: 1px solid #fbde06;
            border-radius: 60px;
            font-weight: 700;
            font-size: 20px;
            margin-left: 5px;
            box-shadow: 0px 6px 15px 2px #0a7379;
          }
          .bnt_2:hover {
            background-color: transparent;
            color: white;
          }
          .community {
            margin-top: -5px;
          }
          .bnt_3 {
            font-weight: 800;
            color: #fbde06;
            background: transparent;
            border: 1px solid #fbde06;
            padding: 1px 11px;
            font-size: 20px;
            border-radius: 30px;
            margin-top: 9px;
          }
          .chosen {
            font-weight: 100;
            font-size: 15px;
            margin-top: -3px;
            margin-left: 3px;
            letter-spacing: 0.5px;
          }
          .chosen_1 {
            font-size: 17px;
            margin-left: 3px;
            margin-top: 6px;
            margin-bottom: 5px;
            letter-spacing: 1px;
          }
          .ignore_2 {
            width: 100%;
            letter-spacing: 4px;
            font-size: 48px;
            line-height: 50px;
            margin-left: 3px;
            margin-bottom: 0px;
            font-weight: 800;
          }
          .ignore_3 {
            width: 100%;
            letter-spacing: 0px;
            font-size: 48px;
            line-height: 50px;
            margin-left: 3px;
            margin-bottom: 0px;
            font-weight: 800;
          }
          .imgssss {
            margin-top: 9px;
          }
          .better {
            color: #345771;
            font-weight: 800;
          }
          .shape {
            width: 12%;
            margin-left: 4px;
            margin-top: -11px;
          }
          ul li h6 {
            font-weight: 600;
            cursor: pointer;
            color: #696969;
          }
          input::placeholder {
            color: #999fa5;
          }
          ul li h6:hover {
            color: #ca3535 !important;
          }
          @media only screen and (min-width: 993px) {
            .container {
              width: 80%;
            }
          }
          @media only screen and (max-width: 800px) {
            .inpt {
              width: 90% !important;
            }
            .ignore_3 {
              font-size: 34px;
            }
            .ignore_2 {
              font-size: 30px;
            }
          }
          @media only screen and (max-width: 440px) {
            .imgs_data {
              width: 8%;
              margin-top: -5px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Footer;
