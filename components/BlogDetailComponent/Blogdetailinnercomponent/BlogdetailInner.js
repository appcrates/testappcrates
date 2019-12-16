import React, { Component } from 'react'

const Layer12 = {
    width: '3.7%'
}


class BlogDtailInner extends Component {


    componentDidMount = () => {
        $(document).ready(function () {
            $('.number').bind('click', function () {
                $('.active').removeClass('active')
                $(this).addClass('active');
            });
            $('.bnt_one').bind('click', function () {
                $('.active-1').removeClass('active-1')
                $(this).addClass('active-1');
            });
            $('.next').click(function(){ $('.carousel').carousel('next');return false; });
            $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
        });
    }
    render() {
        return (

            <div>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div>
                                <img src="./blogdetails/img.png" className="w-100"/>
                                <h4 className="card-title1">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                <span className=" ml-3 john_deo"><img src="./blogdetails/dp.png" /> JOHN DEO</span></h6>
                                <p className="card-text mt-4 pt-lg-2 pr-3">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p className="card-text1 p-3 mr-3">"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." </p>
                                <p className="card-text mt-4 pt-lg-2 pr-3">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <h4 className="card-title2">Aenean sagittis risus nec tellus sem</h4>
                                <div className="mt-4">
                                    <img src="./blogdetails/red_bullet.png" className="pr-2" />
                                    <span className="pera">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut ut nu Lorem ipsum dolor sit<br/> <span className="pl-3 ml-1">amet consectetur adipiscing elit Ut ut nu Lorem ipsum dolor sit amet consectetur.</span></span>
                                </div>
                                <div className="mt-4">
                                    <img src="./blogdetails/red_bullet.png" className="pr-2" />
                                    <span className="pera">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut ut nu Lorem ipsum dolor sit<br/> <span className="pl-3 ml-1">amet consectetur adipiscing elit Ut ut nu Lorem ipsum dolor sit amet consectetur.</span></span>
                                </div>
                                <div className="mt-4">
                                    <img src="./blogdetails/red_bullet.png" className="pr-2" />
                                    <span className="pera">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut ut nu Lorem ipsum dolor sit<br/> <span className="pl-3 ml-1">amet consectetur adipiscing elit Ut ut nu Lorem ipsum dolor sit amet consectetur.</span></span>
                                </div>

                                <div>
                                    <h4 className="card-title2">Aenean sagittis risus nec tellus</h4>
                                    <p className="pera mt-4 pr-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="./blogdetails/img-2.png" className="w-100"/>
                                        <h4 className="card-title3">Lorem ipsum dolort coectetur adipiscing elit Ut ut nulla</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="./blogdetails/img-3.png" className="w-100"/>
                                        <h4 className="card-title3">Lorem ipsum dolort coectetur adipiscing elit Ut ut nulla</h4>
                                    </div>
                                    <div className="border_bottom  ml-3 mr-3">
                                        <p className="pera mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <h6 className="card-title3">SHARE THIS STORY!</h6>
                                    </div>
                                    <div className="col-md-6 mt-4 text-right">
                                        <span className="bg-color-12">
                                            <i className="fa fa-facebook"></i>
                                        </span>
                                        <span className="bg-color-13 active">
                                            <i className="fa fa-twitter"></i>
                                        </span>
                                        <span className="bg-color-13">
                                            <i className="fa fa-instagram"></i>
                                        </span>
                                        <span className="bg-color-12">
                                            <i className="fa fa-pinterest-p"></i>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="categories mt-5 pt-lg-3 mb-1">leave a c<img src="./blog/post_icon.png" className="layer-1" style={Layer12}/>mment</h1>
                                    <img src="./images/line.png" className="" />
                                </div>
                                <form>
                                    <div className="form-group mt-4 row">
                                        <div className="col-md-4 pr-lg-0">
                                            <input type="text" placeholder="First Name" className="form-control2" />
                                        </div>
                                        <div className="col-md-4 pr-lg-0">
                                            <input type="email" placeholder="Email" className="form-control2" />
                                        </div>
                                        <div className="col-md-4 pr-lg-0">
                                            <input type="text" placeholder="Website" className="form-control2" />
                                        </div>
                                        
                                    </div>
                                    <div className="mb-5">
                                        <textarea className="form-control" rows="4" placeholder="Your Comment"></textarea>
                                        <button className="bnt_2 mt-3">POST COMMENT</button>
                                    </div>
                                </form>
                                <div>
                                    <h6 className="card-title2">2 COMMENT</h6>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <h6 className="card-title-1 pb-0 mb-0 pt-2"><img src="./blogdetails/dp.png" /><span className="mt-1 ml-2 john_deo">JOHN DEO</span> OCT, 22, 2019
                                            </h6>
                                        </div>
                                        <div className="col-md-5 mt-4 text-right">
                                            <img src="./blogdetails/reply.png" />
                                            <span className="pl-2 reply">Reply</span>
                                        </div>
                                    </div>
                                    <p className="mt-4 pera">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit.</p>
                                    <div className="pl-lg-5 ml-lg-5 mt-5">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <h6 className="card-title-1 pb-0 mb-0 pt-2"><img src="./blogdetails/dp2.png" /><span className="mt-1 ml-2 john_deo">JOHN DEO</span> OCT, 22, 2019
                                                </h6>
                                            </div>
                                            <div className="col-md-5 mt-4 text-right">
                                                <img src="./blogdetails/reply.png" />
                                                <span className="pl-2 reply">Reply</span>
                                            </div>
                                        </div>
                                        <p className="mt-4 pera">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pl-lg-5 mt-lg-0 mt-5">
                            <div className="bg-color-1">
                                <input type="text" className="form-control border-0 pb-4 m-0 inputs float-left" placeholder="Search" />
                                <i className="fa fa-search mt-1 arrow_2"></i>
                            </div>
                            <div>
                                <h1 className="categories mt-5 mb-0">Categ<img src="./blog/post_icon.png" className="layer-1"/>ries</h1>
                                <img src="./images/line.png" className="" />
                                <div className="row mt-4 mb-2">
                                    <div className="col-2">
                                        <img src="./blog/findyourtribe.png" />
                                    </div>
                                    <div className="col-10 pl-0">
                                        <h4 className="find_your">find your tribe</h4>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">
                                        <img src="./blog/real_accountability.png" />
                                    </div>
                                    <div className="col-10 pl-0 pr-0">
                                        <h4 className="find_your">real accountability </h4>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">
                                        <img src="./blog/data_drive.png" />
                                    </div>
                                    <div className="col-10 pl-0 pr-0">
                                        <h4 className="find_your">data driven</h4>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">
                                        <img src="./blog/apply.png" />
                                    </div>
                                    <div className="col-10 pl-0 pr-0">
                                        <h4 className="find_your mt-0">apply & get matched with your tribe</h4>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">
                                        <img src="./blog/meetweekly.png" />
                                    </div>
                                    <div className="col-10 pl-0 pr-0">
                                        <h4 className="find_your mt-0">meet weekly in a curated small group</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="tags">
                                <h1 className="categories mt-5 mb-0">Tag</h1>
                                <img src="./images/line.png" className="" />
                                <div className="row mt-4 mb-3 pt-3">
                                    <div className="col-4 pr-0">
                                        <a href="" className="bnt-3 bnt_one">Lorem Ipsu</a>
                                    </div>
                                    <div className="col-4 pl-1">
                                        <a href="" className="bnt-4 bnt_one">Faucibus</a>
                                    </div>
                                    <div className="col-4 pl-0">
                                        <a href="" className="bnt-4 bnt_one">Imperdiet</a>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-3">
                                    <div className="col-6 pr-0">
                                        <a href="" className="bnt-5 bnt_one active-1">Bibendstum</a>
                                    </div>
                                    <div className="col-6 pl-0">
                                        <a href="" className="bnt-5 bnt_one ">Fermentum</a>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-3">
                                    <div className="col-4 pr-0">
                                        <a href="" className="bnt-6 bnt_one ">Auctor</a>
                                    </div>
                                    <div className="col-4 pl-1">
                                        <a href="" className="bnt-6 bnt_one ">Curabur</a>
                                    </div>
                                    <div className="col-4 pl-0">
                                        <a href="" className="bnt-6 bnt_one ">Pharetra</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="categories mt-5 mb-0">recent p<img src="./blog/post_icon.png" className="layer-1"/>st</h1>
                                <img src="./images/line.png" className="" />

                                <div>
                                    <div className="row mb-2 mt-5">
                                        <div className="col-4">
                                            <img src="./blog/post_img3.png" className="w-100" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <h6>Aenean sagittis risuse tellus ultricies sem</h6>
                                            <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                            <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        </div>
                                    </div>
                                    <div className="border_bottom"></div>
                                    <div className="row mb-2 mt-3">
                                        <div className="col-4">
                                            <img src="./blog/post_img2.png" className="w-100" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <h6>Aenean sagittis risuse tellus ultricies sem</h6>
                                            <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                            <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        </div>
                                    </div>
                                    <div className="border_bottom"></div>
                                    <div className="row mb-2 mt-3">
                                        <div className="col-4">
                                            <img src="./blog/post_img1.png" className="w-100" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <h6>Aenean sagittis risuse tellus ultricies sem</h6>
                                            <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                            <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        </div>
                                    </div>
                                    <div className="border_bottom"></div>
                                    <div className="row mb-2 mt-3">
                                        <div className="col-4">
                                            <img src="./blog/post_img4.png" className="w-100" />
                                        </div>
                                        <div className="col-8 pl-0">
                                            <h6>Aenean sagittis risuse tellus ultricies sem</h6>
                                            <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                            <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        </div>
                                    </div>
                                    <div className="border_bottom"></div>
                                </div>
                            </div>
                            <div>
                                <h1 className="categories mt-5 mb-0">Text widget</h1>
                                <img src="./images/line.png" className="" />
                                <div>
                                    <p className="text-field">Lorem ipsum dolor sit asmet secfeturi adipiscing elit Ut ut ndu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="categories mt-5 mb-0">instagram</h1>
                                <img src="./images/line.png" className="" />
                                <div className="row mt-4 pt-2">
                                    <div className="col-md-4 col-6 pr-0 mt-2">
                                        <img src="./blog/insta_img1.png" className="w-100"/>
                                    </div>
                                    <div className="col-md-4 col-6 pr-0 mt-2">
                                        <img src="./blog/insta_img2.png" className="w-100"/>
                                    </div>
                                    <div className="col-md-4 col-6 mt-2 pr-0">
                                        <img src="./blog/insta_img3.png" className="w-100"/>
                                    </div>
                                    <div className="col-md-4 col-6 pr-0 mt-2">
                                        <img src="./blog/insta_img4.png" className="w-100"/>
                                    </div>
                                    <div className="col-md-4 col-6 pr-0 mt-2">
                                        <img src="./blog/insta_img5.png" className="w-100"/>
                                    </div>
                                    <div className="col-md-4 col-6 mt-2 pr-0">
                                        <img src="./blog/insta_img6.png" className="w-100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .learn-more{
                        text-transform: uppercase;
                        font-size: 14px;
                        font-weight: 700;
                        color: #cd3838;
                    }
                    .bnt-3{
                        border: 1px solid gray;
                        padding: 7px 11px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: #848793;
                    }
                    .bnt-4{
                        border: 1px solid gray;
                        padding: 7px 21px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: #848793;
                    }
                    .bnt_one:hover{
                        background-color: #19b582;
                        color: white;
                        text-decoration: none;
                        border: 1px solid #19b582;
                    }
                    .active-1{
                        background-color: #19b582; 
                        border: 1px solid #19b582 !important;
                        color: white !important;
                    }
                    .bnt-6{
                        border: 1px solid gray;
                        padding: 7px 24px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: #848793;
                    }
                    .bnt-5{
                        border: 1px solid gray;
                        padding: 7px 33px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: #848793;
                    }
                    .find_your{
                        font-size: 16px;
                        margin-top: 9px;
                        font-weight: 900;
                        color: #355872;
                        text-transform: uppercase;
                    }
                    .learn-more:hover{
                        text-decoration: none;
                    }
                    .border_bottom{
                        border-bottom: 1px solid #f4f4f4;
                        margin-left: 5px;
                        margin-right: 5px;
                    }
                    .border_bottom1{
                        border-bottom: 2px solid #f4f4f4;
                        margin-left: 5px;
                        margin-right: 5px;
                    }
                    .bg-color-12{
                        background-color: white;
                        height: 40px;
                        width: 40px;
                        padding: 6px 10px;
                        border-radius: 100%;
                        color: gray;
                        margin-left: 9px;
                        box-shadow: 0px 13px 10px -2px #e6e6e6;
                    }
                    .reply{
                        color: #ce3b3b;
                        font-weight: 700;
                    }
                    .bg-color-13{
                        background-color: white;
                        height: 40px;
                        width: 40px;
                        padding: 7px 9px;
                        color: gray;
                        border-radius: 100%;
                        margin-left: 9px;
                        box-shadow: 0px 13px 10px -2px #e6e6e6;
                    }
                    .bnt_2{
                        background: #fbde06;
                        padding: 10px 20px;
                        border: 1px solid #fbde06;
                        border-radius: 60px;
                        font-weight: 700;
                        font-size: 18px;
                        margin-left: 5px;
                        box-shadow: 0px 13px 10px -2px #e6e6e6;
                    }
                    .active{
                        background-color: #19b582;
                        color: white;
                    }
                    .bg-color{
                        background-color: white;
                        box-shadow: 0px 8px 15px 0px #e7e7e7;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }
                    .text-field{
                        font-size: 15px;
                        font-weight: 600;
                        margin-top: 20px;
                        color: #949494;
                    }
                    .card-text{
                        color: #8a8a8a;
                        font-weight: 600;
                        font-size: 14px;
                    }
                    .card-text1{
                        color: Black;
                        font-weight: 600;
                        font-size: 14px;
                        background-color: #f6fffd;
                        border-left: 4px solid #129675;
                    }
                    .img-3{
                        height: 85%;
                        border-radius: 10px;
                    }
                    .card-title{
                        font-size: 20px !important;
                        font-weight: 800 !important;
                        color: #355872;
                        text-transform: uppercase; 
                    }
                    .card-title1{
                        font-size: 30px !important;
                        font-weight: 800 !important;
                        color: #355872;
                        margin-top: 30px;
                        text-transform: uppercase; 
                    }
                    .card-title2{
                        font-size: 25px !important;
                        font-weight: 800 !important;
                        color: #355872;
                        margin-top: 30px;
                        text-transform: uppercase; 
                    }
                    .card-title3{
                        font-size: 16px !important;
                        font-weight: 800 !important;
                        color: #355872;
                        margin-top: 30px;
                        text-transform: uppercase; 
                    }
                    .border_left{
                        border-left:2px solid #bfc1c9;
                    }
                    h6{
                        font-size: 16px;
                        font-weight: 700;
                        color: #375973;
                        margin-top: 5px;
                    }
                    .john_deo{
                        color: #020202 !important;
                    }
                    .card-title-1{
                        font-size: 12px;
                        color: #a8abb6;
                        font-weight: 700;
                    }
                    .bg-image-1{
                        background-image: url(./blog/post-1.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 244px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    .bg-image-2{
                        background-image: url(./blog/post2.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 244px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    .categories{
                        font-size: 31px;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: #355872;
                    }
                    .layer-1{
                        width: 9%;
                        margin-top: -7px;
                    }
                    .pera{
                        font-weight: 600;
                        font-size: 15px;
                        color: #8c8c8c;
                    }
                    .bg-color-1{
                        background-color:white;
                        border-radius: 34px;
                        padding: 14px 20px;
                        border: 1px solid lightgray;
                    }
                    .inputs{
                        width: 93% !important;
                    }
                    .form-control2{
                        width: 100% !important;
                        box-shadow: none;
                        height: 50px;
                        padding-left: 10px;
                        border-radius: 50px;
                        border: 1px solid #ced4da;
                    }
                    .form-control2::placeholder{
                        color: #b5babe;
                        font-size: 13px;
                    }
                    .form-control::placeholder{
                        color: #b5babe;
                        font-size: 13px;   
                    }
                    .form-control{
                        border-radius: 20px;
                    }
                    .form-control1{
                        width: 93% !important;
                        margin-top: -12px !important;
                        box-shadow: none;
                    }
                    .form-control1:focus{
                        outline: none;
                        box-shadow: none !important;
                    }
                    .form-control::placeholder{
                        color: #8f969c;
                    }
                    .form-control1::placeholder{
                        color: #8f969c;
                    }
                    .arrow_2{
                        color: #d7d6d6;
                    }
                    @media only screen and (min-width: 993px){
                        .container {
                            width: 80%;
                        }
                    }
                    @media only screen and (max-width: 800px){
                        .pagin {
                            margin-left: 5px !important;
                        }
                        .pagin1 {
                            margin-right: 0px !important;
                        }
                        .bg-color{
                            border-radius: 10px !important;
                        }
                        .bg-image-1{
                            border-radius: 10px !important;
                        }
                        .bg-image-2{
                            border-radius: 10px !important;
                        }
                        .bg-image-3{
                            border-radius: 10px !important;
                        }
                        .bg-image-4{
                            border-radius: 10px !important;
                        }
                        .bg-image-5{
                            border-radius: 10px !important;
                        }
                        .bg-image-6{
                            border-radius: 10px !important;
                        }
                        .ignore_3{
                            font-size: 34px;
                        }
                        .ignore_2{
                            font-size: 30px;
                        }
                        .inpt{
                            width: 100% !important;
                        }
                    }
                    
                `}</style>
            </div>
        )
    }
}
export default BlogDtailInner