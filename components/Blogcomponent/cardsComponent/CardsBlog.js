import React, { Component } from 'react';
// import Pagination from "react-js-pagination";


class CardsBlog extends Component{

    // constructor(props) {
    //     super(props);
    //         this.state = {
    //         activePage: 1
    //         };
    //   }
    
    // handlePageChange = (pageNumber) => {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    //   }

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
        });
    }
    render() {
        return (

            <div>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row ">
                                <div className="col-md-4 bg-image-1 pr-0">
                                </div>
                                <div className="col-md-8 pr-0 bg-color pb-4">
                                    <div className="card-block px-3">
                                        <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                        <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        <h4 className="card-title">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <a href="https://appcrates.herokuapp.com/BlogDetail" className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 bg-image-2 pr-0">
                                </div>
                                <div className="col-md-8 pr-0 bg-color pb-4">
                                    <div className="card-block px-3">
                                        <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                        <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        <h4 className="card-title">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <a href="https://appcrates.herokuapp.com/BlogDetail" className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 bg-image-3 pr-0">
                                </div>
                                <div className="col-md-8 pr-0 bg-color pb-4">
                                    <div className="card-block px-3">
                                        <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                        <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        <h4 className="card-title">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <a href="https://appcrates.herokuapp.com/BlogDetail" className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 bg-image-4 pr-0">
                                </div>
                                <div className="col-md-8 pr-0 bg-color pb-4">
                                    <div className="card-block px-3">
                                        <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                        <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        <h4 className="card-title">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <a href="https://appcrates.herokuapp.com/BlogDetail" className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 bg-image-5 pr-0">
                                </div>
                                <div className="col-md-8 pr-0 bg-color pb-4">
                                    <div className="card-block px-3">
                                        <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                        <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        <h4 className="card-title">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <a href="https://appcrates.herokuapp.com/BlogDetail" className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 bg-image-6 pr-0">
                                </div>
                                <div className="col-md-8 pr-0 bg-color pb-4">
                                    <div className="card-block px-3">
                                        <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                        <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        <h4 className="card-title">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <a href="https://appcrates.herokuapp.com/BlogDetail" className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 bg-image-2 pr-0">
                                </div>
                                <div className="col-md-8 pr-0 bg-color pb-4">
                                    <div className="card-block px-3">
                                        <h6 className="card-title-1 pb-0 mb-0 pt-2">OCT, 22, 2019 
                                        <span className="border_left ml-3 pl-3 john_deo">JOHN DEO</span></h6>
                                        <h4 className="card-title">Lorem ipsum dolor sit conseur adipiscing elit sit amet</h4>
                                        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <a href="https://appcrates.herokuapp.com/BlogDetail" className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <Pagination
                                className=""
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                prevPageText='Prev'
                                nextPageText='Next'
                                firstPageText=''
                                lastPageText=''
                                totalItemsCount={450}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange}
                                /> */}
                            <div className="w-100">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-left mb-0 mt-5">
                                        <li className="page-item disabled">
                                            <a className="page-link pervious" href="#"><i className="fa fa-angle-left arrow1"></i>Previous
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link border-0 pagin number active" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link border-0 number" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link border-0 number" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link border-0 number" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link border-0 number" href="#">5</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link border-0 pagin1 number" href="#">6</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link next" href="#">Next 
                                                <i className="fa fa-angle-right arrow"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div> 
                        </div>
                        <div className="col-md-4 pl-lg-5 mt-lg-0 mt-5">
                            <div className="bg-color-1">
                                <input type="text" className="form-control border-0 pb-3 m-0 float-left" placeholder="Search" />
                                {/* <i className="fa fa-search mt-1 arrow_2"></i> */}
                                <img src="./blog/search_icon.png" className="arrow_2" />
                            </div>
                            <div>
                                <h1 className="categories mt-5 mb-2">Categ<img src="./blog/post_icon.png" className="layer-1"/>ries</h1>
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
                                <h1 className="categories mt-5 mb-2">Tag</h1>
                                <img src="./images/line.png" className="" />
                                <div className="row mt-4 pt-3">
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
                                <div className="row mt-2">
                                    <div className="col-6 pr-0">
                                        <a href="" className="bnt-5 bnt_one active-1">Bibendstum</a>
                                    </div>
                                    <div className="col-6 pl-0">
                                        <a href="" className="bnt-5 bnt_one ">Fermentum</a>
                                    </div>
                                </div>
                                <div className="row mt-2">
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
                                <h1 className="categories mt-5 pt-lg-3 mb-2">recent p<img src="./blog/post_icon.png" className="layer-1"/>st</h1>
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
                                <h1 className="categories mt-5 pt-lg-3 mb-2">Text widget</h1>
                                <img src="./images/line.png" className="" />
                                <div>
                                    <p className="text-field">Lorem ipsum dolor sit asmet secfeturi adipiscing elit Ut ut ndu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="categories mt-5 pt-lg-3 mb-2">instagram</h1>
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
                        padding: 7px 9px;
                        border-radius: 20px;
                        font-size: 13px;
                        font-weight: 700;
                        color: #848793;
                    }
                    .bnt-4{
                        border: 1px solid gray;
                        padding: 7px 21px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: #848793;
                        font-weight: 700;
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
                        box-shadow: 0px 6px 20px 3px #dedede;
                    }
                    .bnt-6{
                        border: 1px solid gray;
                        padding: 7px 24px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: #848793;
                        font-weight: 700;
                    }
                    .bnt-5{
                        border: 1px solid gray;
                        padding: 7px 33px;
                        border-radius: 20px;
                        font-size: 13px;
                        color: #848793;
                        font-weight: 700;
                    }
                    .learn-more:hover{
                        text-decoration: none;
                    }
                    .border_bottom{
                        border-bottom: 1px solid #f4f4f4;
                        margin-left: 5px;
                        margin-right: 5px;
                    }
                    .bg-color{
                        background-color: white;
                        box-shadow: 0px 16px 25px 0px #e7e7e7;
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
                        color: #656565;
                        font-weight: 600;
                        font-size: 14px;
                    }
                    .img-3{
                        height: 85%;
                        border-radius: 10px;
                    }
                    .card-title{
                        font-size: 20px !important;
                        font-weight: 800 !important;
                        color: #355872;
                        line-height: 30px;
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
                        font-weight: 800 !important;
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
                        height: 260px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    .bg-image-2{
                        background-image: url(./blog/post2.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 260px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    .find_your{
                        font-size: 16px;
                        margin-top: 9px;
                        font-weight: 900;
                        color: #355872;
                        cursor: pointer;
                        text-transform: uppercase;
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
                    .bg-image-3{
                        background-image: url(./blog/post-3.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 260px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    .bg-image-4{
                        background-image: url(./blog/post-4.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 260px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    .bg-image-5{
                        background-image: url(./blog/post-5.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 260px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    .bg-image-6{
                        background-image: url(./blog/img-3.png);
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 260px;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        box-shadow:0px 8px 15px 0px #e7e7e7;
                    }
                    nav{
                        background-color: transparent;
                        box-shadow: none !important;
                        width: 100%;
                    }
                    .pervious{
                        border-radius: 50px !important;
                        padding: 5px 11px;
                        width: 130px;
                        font-weight: 700;
                        color: #686868;
                    }
                    .next{
                        border-radius: 50px !important;
                        padding: 5px 16px;
                        font-weight: 700;
                        color: #ce3b3b;
                        width: 110px;
                    }
                    .pagin{
                        margin-left: 120px !important; 
                    }
                    .pagin1{
                        margin-right: 120px; 
                    }
                    .arrow{
                        font-size: 21px;
                        margin-left: 7px;
                        font-weight: 500;
                    }
                    .arrow1{
                        font-size: 21px;
                        margin-right: 5px;
                        font-weight: 500;
                        color: #b3b3b3;
                    }
                    nav i{
                        height: 0px;
                    }
                    .disabled{
                        cursor: no-drop;
                    }
                    .number:hover{
                        background-color: #ce3b3b;
                        border-radius: 100%; 
                        color: white;
                    }
                    .active{
                        background-color: #ce3b3b !important;
                        border-radius: 100% !important; 
                        color: white !important; 
                    }
                    .page-link{
                        margin-left: 0px;
                    }
                    .bg-color-1{
                        background-color:white;
                        border-radius: 34px;
                        padding: 13px 20px;
                        border: 1px solid lightgray;
                    }
                    .form-control{
                        width: 93% !important;
                        margin-top: -12px !important;
                        box-shadow: none;
                    }
                    .form-control:focus{
                        outline: none;
                        box-shadow: none !important;
                    }
                    .form-control::placeholder{
                        color: #8f969c;
                    }
                    .arrow_2{
                        color: #d7d6d6;
                        cursor: pointer;
                        width: 6%;
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
                        .pagination li:nth-child(7){
                            display: none;
                        }
                        .pagination li:nth-child(6){
                            display: none;
                        }
                        .pagination li:nth-child(5){
                            display: none;
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
                    @media only screen and (max-width: 440px){
                        .pervious {
                            width: 100px;
                            font-size: 13px;
                        }
                        .next{
                            width: 90px;
                            font-size: 13px;
                        }
                        .arrow {
                            font-size: 17px;
                        }
                        .arrow1 {
                            font-size: 17px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}
export default CardsBlog