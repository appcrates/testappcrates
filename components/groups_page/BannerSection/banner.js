import React, { Component } from "react";
import GroupNumber from '../group_number/group_number'
import GroupNumber1 from '../group_number01/group_number_1'
import GroupNumber2 from '../group_number02/group_number_2'
import Footer from '../footer/footer'
import Header from '../../Header'
class Banner extends Component {
    render() {
        return (
            <div>
                <div className="banner_image">
                    <div className="container">
                    <Header/>
                        <div className="row text_items pl-lg-5 ml-lg-3 pt-5">
                            <div className="col-md-6 pt-5">
                                <div>
                                    <h1 className="group_text">
                                        Gr
                                        <img src="./images/Layer_121.png" className="layer_121" />
                                        ups Page
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-6 pt-5">
                                <img src="./group/ppl.png" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <GroupNumber/>
                    <GroupNumber1/>
                    <GroupNumber2/>
                    <Footer/>
                </div>
                
                <style jsx>{`
                    .profile_heading {
                        font-size: 10px;
                        font-weight: 100;
                    }
                    .banner_image {
                        background-image: url(./images/Banner.png);
                        background-position: bottom;
                        background-repeat: no-repeat;
                        background-size: cover;
                        height: auto;
                        padding-bottom: 90px;
                    }
                    .group_text {
                        text-transform: uppercase;
                        color: white;
                        font-weight: 800;
                        font-size: 58px;
                    }
                    .layer_121 {
                        width: 8%;
                        margin-top: -7px;
                    }
                    .text_items {
                        align-items: center;
                    }
                    @media only screen and (max-width: 600px) {
                        .layer_121{
                           width: 13%;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
export default Banner;
