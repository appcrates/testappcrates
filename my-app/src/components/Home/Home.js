import React, {Component} from 'react';
import './Home.css';
import $ from 'jquery';
import Instafeed from 'instafeed.js';

const ignoreStyle = {
    color: '#345771',
}

class Jquery extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount = () =>{
        $("#plus").click(function(){
            $(".pera-1").slideDown("slow");
            $(".pera-1").css('display', 'block');
            $("#plus").hide();
            $(".heading_4").css('color', '#cf4949');
            $("#minus").show();
            $("#minus").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#minus").click(function(){
            $(".pera-1").slideUp("slow");
            $("#minus").hide();
            $(".heading_4").css('color', '#345771');
            $("#plus").show();
            $("#plus").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#plus-1").click(function(){
            $(".pera-2").slideDown("slow");
            $(".heading-1").css('color', '#cf4949');
            $(".pera-2").css('display', 'block');
            $("#plus-1").hide();
            $("#minus-1").show();
            $("#minus-1").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#minus-1").click(function(){
            $(".pera-2").slideUp("slow");
            $(".heading-1").css('color', '#345771');
            $("#minus-1").hide();
            $("#plus-1").show();
            $("#plus-1").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#plus-2").click(function(){
            $(".pera-3").slideDown("slow");
            $(".heading-2").css('color', '#cf4949');
            $(".pera-3").css('display', 'block');
            $("#plus-2").hide();
            $("#minus-2").show();
            $("#minus-2").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#minus-2").click(function(){
            $(".pera-3").slideUp("slow");
            $(".heading-2").css('color', '#345771');
            $("#minus-2").hide();
            $("#plus-2").show();
            $("#plus-2").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#plus-3").click(function(){
            $(".pera-4").slideDown("slow");
            $(".heading-3").css('color', '#cf4949');
            $(".pera-4").css('display', 'block');
            $("#plus-3").hide();
            $("#minus-3").show();
            $("#minus-3").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#minus-3").click(function(){
            $(".pera-4").slideUp("slow");
            $(".heading-3").css('color', '#345771');
            $("#minus-3").hide();
            $("#plus-3").show();
            $("#plus-3").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#plus-4").click(function(){
            $(".pera-5").slideDown("slow");
            $(".heading-4").css('color', '#cf4949');
            $(".pera-5").css('display', 'block');
            $("#plus-4").hide();
            $("#minus-4").show();
            $("#minus-4").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#minus-4").click(function(){
            $(".pera-5").slideUp("slow");
            $(".heading-4").css('color', '#345771');
            $("#minus-4").hide();
            $("#plus-4").show();
            $("#plus-4").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#plus-5").click(function(){
            $(".pera-6").slideDown("slow");
            $(".heading-5").css('color', '#cf4949');
            $(".pera-6").css('display', 'block');
            $("#plus-5").hide();
            $("#minus-5").show();
            $("#minus-5").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#minus-5").click(function(){
            $(".pera-6").slideUp("slow");
            $(".heading-5").css('color', '#345771');
            $("#minus-5").hide();
            $("#plus-5").show();
            $("#plus-5").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#plus-6").click(function(){
            $(".pera-7").slideDown("slow");
            $(".heading-6").css('color', '#cf4949');
            $(".pera-7").css('display', 'block');
            $("#plus-6").hide();
            $("#minus-6").show();
            $("#minus-6").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
          $("#minus-6").click(function(){
            $(".pera-7").slideUp("slow");
            $(".heading-6").css('color', '#345771');
            $("#minus-6").hide();
            $("#plus-6").show();
            $("#plus-6").css({'display' : 'block' , 'margin-left' : 'auto'});
          });
            
        $(document).ready(function () {
            $('.tbs').bind('click', function() {
                $('.active-1').removeClass('active-1')
                $(this).addClass('active-1');
            });
            $(".tbs-1").click(function(){
                $("#tbs-3").css('display','none');
                $("#tbs-1").css('display','block');
                $("#tbs-3").css('display','none');
                $("#tbs-2").css('display','none');
                $(".tribe").css('color','black');
                $(".tribe_1").css('color','#345771');
                $(".tribe-2").css('color','#345771');
                $(".img__1").css('display','none');
                $(".img__12").css('display','block');
                $(".img__14").css('display','block');
                $(".img__3").css('display','none');
                $(".img__13").css('display','block');
                $(".img__2").css('display','none');
                $("#tbs-1").show();
                $("#tbs-3").hide();
            });
            $(".tbs-2").click(function(){
                $("#tbs-2").show();
                $(".img__12").css('display','none');
                $(".img__1").css('display','block');
                $(".img__14").css('display','block');
                $(".img__3").css('display','none');
                $(".img__2").css('display','block');
                $(".img__13").css('display','none');
                $("#tbs-1").css('display','none');
                $("#tbs-3").css('display','none');
                $("#tbs-2").css('display','block');
                $(".tribe-1").css('color','black');
                $(".tribe").css('color','#345771');
                $(".tribe-2").css('color','#345771');
                $("#tbs-1").hide();
            });
            $(".tbs-3").click(function(){
                $("#tbs-3").show();
                $(".img__1").css('display','block');
                $(".img__12").css('display','none');
                $(".img__13").css('display','block');
                $(".img__2").css('display','none');
                $(".img__14").css('display','none');
                $(".img__3").css('display','block');
                $("#tbs-3").css('display','block');
                $("#tbs-2").css('display','none');
                $("#tbs-1").css('display','none');
                $(".tribe-2").css('color','black');
                $(".tribe-1").css('color','#345771');
                $("#tbs-2").hide();
            });
            $('.find_more_1').bind('click', function() {
                $('.active-2').removeClass('active-2')
                $(this).addClass('active-2');
            });
            $(".tabs-1").click(function(){
                $("#tbs-3").css('display','none');
                $("#tbs-1").css('display','block');
                $("#tbs-3").css('display','none');
                $("#tbs-2").css('display','none');
                $(".tribe").css('color','black');
                $(".tribe_1").css('color','#345771');
                $(".tribe-2").css('color','#345771');
                $(".img__1").css('display','none');
                $(".img__12").css('display','block');
                $(".img__14").css('display','block');
                $(".img__3").css('display','none');
                $(".img__13").css('display','block');
                $(".img__2").css('display','none');
                $("#tbs-1").show();
                $("#tbs-3").hide();
            });
            $(".tabs-2").click(function(){
                $("#tbs-2").show();
                $(".img__12").css('display','none');
                $(".img__1").css('display','block');
                $(".img__14").css('display','block');
                $(".img__3").css('display','none');
                $(".img__2").css('display','block');
                $(".img__13").css('display','none');
                $("#tbs-1").css('display','none');
                $("#tbs-3").css('display','none');
                $("#tbs-2").css('display','block');
                $(".tribe-1").css('color','black');
                $(".tribe").css('color','#345771');
                $(".tribe-2").css('color','#345771');
                $("#tbs-1").hide();
            });
            $(".tabs-3").click(function(){
                $("#tbs-3").show();
                $(".img__1").css('display','block');
                $(".img__12").css('display','none');
                $(".img__13").css('display','block');
                $(".img__2").css('display','none');
                $(".img__14").css('display','none');
                $(".img__3").css('display','block');
                $("#tbs-3").css('display','block');
                $("#tbs-2").css('display','none');
                $("#tbs-1").css('display','none');
                $(".tribe-2").css('color','black');
                $(".tribe-1").css('color','#345771');
                $("#tbs-2").hide();
            });
        });

        var userFeed = new Instafeed({
            get: 'user',
            userId: '14562296571',
            clientId: 'e5ac6df224d338e950fe848c4192ce40',
            accessToken: '14562296571.1677ed0.26cf3e0acecd44628f932b41cd746563',
            resolution: 'standard_resolution',
            template: '<div class="col-md-2 mt-2 col-6"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="layer_img w-100"/></a></div>',
            sortBy: 'most-recent',
            limit: 7,
            links: false
          });
          userFeed.run();

    }

render(){
    return(
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row text_items">
                        <div className="col-lg-6 sction mt-lg-0 mt-5">
                            <div className="brder text-left mt-3 pt-2">
                                <span className="master_text pl-2">The Mastermind Network Thats holds you</span>
                            </div>
                            <div className="pt-3">
                                <h5 className="account pl-4 ml-2">Accountable to the</h5>
                                <h1 className="dreams pl-4 ml-2">Dreams that matter m<img src={require('../../img/O_logo.png')} className="layer_121 mr-1" />st</h1>
                            </div>
                            <div className="ml-4 sct">
                                <div className="mt-3 search_1">
                                    <input type="text" className="form-control search" name="" placeholder="Enter Your Email Address" />
                                    <button type="button" className="scrh"><img src={require('../../img/Layer_202copy 2.png')} className="layer_122 text-white" /></button>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-1 pl-xl-5 pl-0"></div>
                                    <div className="col-4">
                                        <div className="trnsp">
                                            <h2 className="mb-0 numberss">$1000+</h2>
                                            <div className="goal">GOALS DONE</div>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="trnsp_1">
                                            <h2 className="numberss mb-0">$625M</h2>
                                            <div className="total">TOTAL DONATIONS</div>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="text-right">
                                
                                {/* <img src={require('../../img/group_64.png')} className=" ml-auto" /> */}
                            </div>
                            <img src={require('../../img/Graphix.png')} className="w-100 graphix pb-5 mt-xl-5 mt-0 pt-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_1 container-fluid mt-md-5 mt-2">
                <div className="row">
                    <div className="col-md-6 text-right">
                        <img src={require('../../img/img.png')} className="banner_1_img" />
                    </div>
                    <div className="col-md-6 sctinss">
                        <h6 className="text-heading">There's a Dream You</h6>
                        <h1 className="ignore">CAN'T IGN<img src={require('../../img/Layer_123.png')} className="layer_1212" />RE. </h1>
                        <img src={require('../../img/line.png')} className="line" />
                        <p className="pera">You want a better life and know you're capable of accomplishing more... but you're not as consistent, organized and focused as you should be.</p>
                        <p className="pera" id="pera">Other things keep getting in the way. You're tried <span className="font-weight-bold">everything... new routines... planners... courses... </span>but nothing really sticks.</p>
                        <h6 className="heading">PLUS, YOU WERE MISSING THE ESSENTIAL INGREDIENT: COMMUNITY ACCOUNTABILITY.</h6>
                        <button className="bnt" id="learn">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="row position-relative text-center container-fluid mt-5 pt-4">
                <div className="col-md-12 pl-md-5 pl-4 pr-md-5 pr-0 video">
                    <iframe className="videos ml-2" src="https://www.youtube.com/embed/kmGel9P8ekk" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
           {/* {DisplayText &&  */}
             <div className="banner_2">
                <div className="text-center fms">
                    <p className="intro pb-0 mb-0">INTRODUCING A SYSTEM FOR ACHIEVING YOUR GOALS THAT LEVERAGES</p>
                    <h1 className="leverage">LEVERAGES THE P<img src={require('../../img/Layer_121.png')} className="layer_126" />WER OF COMMUNITY ACCOUNTABILITY</h1>
                    <img src={require('../../img/Shape_1396 copy_2.png')} className=""/>
                </div>
                              
            </div>
            <div className="container-fluid pr-0 tabes_1 position-relative">
                <div className="">
                    <span className="find_more_1 p-2 tabs-1 active-2">FIND YOUR TRIBE</span>
                    <span className="find_more_1 p-2 tabs-2">REAL ACCOUNTABILITY</span>
                    <span className="find_more_1 p-2 tabs-3">DATA DRIVEN</span>    
                </div>
            </div>
            <div className="clear_fix"></div>
            <div className="container-fluid position-relative tabes">
                <div className="row ">
                    <div className="col-md-9 m-auto ">
                        <div className="row boxsss">                       
                            <div className="col-lg-4 mt-4 col-sm-6">
                                <div className="bg_img_1">
                                    <div className="text-left tbs tbs-1 active-1">
                                        <div className="">
                                            <img src={require('../../img/0212.png')} className="w-25 pt-4 ml-4 img__12" />
                                            <img src={require('../../img/0312.png')} className="w-25 pt-4 ml-4 img__1" />
                                            <h4 className="ml-1 tre tribe_121 tribe-1 tribe pb-4 font-weight-italic">FIND YOUR <br/>TRIBE</h4>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-4 mt-4 col-sm-6">
                                <div className="bg_img_2">
                                    <div className="text-left tbs tbs-2">
                                        <div className="">
                                            <img src={require('../../img/Layer_221.png')} className="w-25 pt-4 ml-4 img__13" />
                                            <img src={require('../../img/221.png')} className="w-25 pt-4 ml-4 img__2" />
                                            <h4 className="tribe_1 tribe-1 tre pb-4 font-weight-italic">REAL<br/> ACCOUNTABILITY</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 col-sm-6">
                                <div className="bg_img_3">
                                    <div className="text-left tbs tbs-3">
                                        <div className="">
                                            <img src={require('../../img/Layer_222.png')} className="w-25 pt-4 ml-4 img__14" />
                                            <img src={require('../../img/22.png')} className="w-25 pt-4 ml-4 img__3" />
                                            <h4 className="ml-1 pb-4 tre tribe-121-2 tribe-2 font-weight-italic">DATA <br/> DRIVEN</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="tbs-2">
                <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 mt-lg-0 mt-5">
                    <div className="col-md-6 lever">
                        <div className="ml-auto">
                            <h1 className="ignore_3 gether_12" style={ignoreStyle}>LEVERAGE <br/>ACC<img src={require('../../img/Layer_123.png')} className="layer_1212_1" />UNTABILITY</h1>
                            <img src={require('../../img/line.png')} className="underline"/>
                            <p className="real_matter">For what REALLY matters</p>
                            <p className="pera_1 text-left mt-3">Why do we always get stuff done for a tough boss often even at the expense of our own health and dreams? The boss holds you accountable with real consequences. But a boss won't hold you to your dreams.</p>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h6 className="number121 text-left ">$1000+ <br/> <span className="charity">GOAL DONATIONS</span></h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="number122 text-left ">$3623+ <br/> <span className="charity">RAISED FOR CHARITY</span></h6>
                                </div>
                            </div>
                            <button className="bnt">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={require('../../img/img_copy 2.png')} className="w-100" />
                    </div>
                    <div className="col-md-10 mt-4">
                        <div className="bg-white p-2 boxes">
                            <div className="row">
                                <div className="col-md-2 col-4 ">
                                    <img src={require('../../img/Quate.png')} className="w-75 mt-md-0 mt-0" />
                                </div>
                                <div className="col-md-10 col-8 pr-md-2 pl-md-0 pl-1 pr-2 mt-2 pt-1">
                                    <div className="average average_12">"You are average of the five people you spend the most time with."<span className="jin"> - JIM ROHN</span></div>
                                </div>
                            </div>
                            {/* <img src={require('../../img/coma.png')} className="coma"/> */}
                            
                           
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container" id="tbs-3">
                <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 mt-lg-0 mt-4">
                    <div className="col-md-6 lever">
                        <div className="ml-auto">
                            <h1 className="ignore_1">DATA DRIVEN INSIGHTS INT<img src={require('../../img/Layer_123.png')} className="layer_1212_1" /> YOU</h1>
                            <img src={require('../../img/line.png')} className="under_line" />
                            <p className="real_matter">Take the 'woo' out of personal development</p>
                            <p className="pera_1 text-left mt-3">Use our tools to rate your performance each week in key areas of life, including: focus, clarity, mindfulness, courage, productivity & energy. This data is presented in your performance dashboard - giving you key insights into the relationship between different aspects of life.</p>
                            <button className="bnt">EXAMPLE DASHBOARD</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={require('../../img/Group_3.png')} className="w-100" />
                    </div>
                    <div className="col-md-8 mt-4">
                        <div className="bg-white p-2 boxes">
                            <div className="row">
                                <div className="col-md-2 col-4">
                                <img src={require('../../img/Quate.png')} className="w-75 mt-md-0 mt-1" />
                                    {/* <i className="fa fa-quote-left coma"></i> */}
                                </div>
                                <div className="col-md-9 col-8 pr-md-2 pl-md-3 pl-1 pr-3 mt-3">
                                    <div className="average htd">"What gets measured, gets managed." <span className="jin">-PETER DRUCKER</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_1 container mt-3" id="tbs-1">
                <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 mt-md-3 mt-0">
                    <div className="col-md-6 lever">
                        <div className="">
                            <h1 className="ignore_1">FIND Y<img src={require('../../img/Layer_123.png')} className="layer_1212_1" />UR TRIBE</h1>
                            <img src={require('../../img/line.png')} className="line-12" />
                            <h6 className="real_matter">Crowd source your success</h6>
                            <p className="pera_1 text-left mt-3">The economy is changing. There's more remote workers, feelancers and enterpreneurs then ever before. This means we're more empowered... but also more isoland.</p>
                            <h6 className="heading_1 text-left ">SOMEONE'S INSIGHT CAN SAVE WEEKS OUR EVEN MONTHS OF TRYING TO FIGURE OUT SOMETHING ON YOUR OWN. </h6>
                            <button className="bnt_112">Apply Now</button>
                        </div>
                    </div>
                    <div className="col-md-6 pl-md-3 pl-0 mt-md-0 mt-5">
                        <img src={require('../../img/img_copy_3.png')} className="w-75 img_3"  />
                    </div>
                </div>
            </div>
            <div className="banner_3">
                <div className="">
                    {/* <img src={require('../../img/top_curve.png')} className="top_curve w-100"/> */}
                </div>
                <div className="container container_1">
                    <div className="row sctins">
                        <div className="col-lg-6 pt-5">
                            <img src={require('../../img/Group_51_copy.png')} className="w-100 pl-md-5 pl-0 group_51" />
                        </div>
                        <div className="col-lg-6 sctinsss mt-lg-5 mt-0 ">
                            <div className="ml-auto">
                                <h6 className="text-heading-12 text-white">THE SYSTEM CREATED TO REALIZE</h6>
                                <h1 className="ignore_21 text-white">MY DREAMS, SHARED WITH <br/> Y<img src={require('../../img/Layer_121.png')} className="layer_126_1 mr-1"/>U</h1>
                                <img src={require('../../img/Shape_1396 copy_2.png')} className="line-1221"/>
                                <h6 className="heading_2 text-white text-left ">HI! I'M ANDREW, DEGITAL NOMAD, SOFTWARE ENGINEER AND FOUNDER OF BETTER TOGETHER.</h6>
                                <p className="pera_2-1 text-white text-left mt-3 ml-2">I realized that it was hard for me to find people that would routinely ask me the hard questions. Did i do the things that i said i was going to do? Am i living up to my potential? When i had conversations with my friends that asked the hard questions...</p>
                                <button className="bnt_12">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container_1">
                <div className="row pl-lg-5 pl-0 ml-lg-2 ml-0 qust">
                    <div className="col-lg-6 mt-md-5 mt-0 pl-lg-3 pl-0 qust-1 pr-lg-2 pr-4">
                        <div className="pl-md-5 pl-0 ml-lg-3 ml-0 FREQUENTLY_ASKED">
                            <p className="pb-0 mb-0 fraq">FREQUENTLY ASKED</p>
                            <h1 className="ignore-1-1 ">QUESTI<img src={require('../../img/Layer_123.png')} className="layer_12121" />NS</h1>
                            <img src={require('../../img/line.png')} className="lnise" />
                        </div>
                        <div className="row bottom_border pt-md-4 pt-0 pl-md-2 pl-0 ml-1">
                            <div className="col-1 pl-0">
                                <div className="number heading-1">01</div>
                            </div>
                            <div className="col-7 pl-md-0 pl-3">
                                <p className="heading_12 heading-1">WHAT IS A MASTERMIND?</p>
                            </div>
                            <div className="col-4 text-right pr-0 sis">
                                <img src={require('../../img/plus.png')} className="plus" id="plus-1" />
                                <img src={require('../../img/minus.png')} className="minus" id="minus-1" />
                            </div>
                            <div>
                                <p className="pera-2 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreatsand business hackathons in the digital nomad spirt. For these, we meet in person for focused work and personal develpoment sessions.</p>
                            </div>
                        </div>
                        
                        <div className="row bottom_border pt-2 pl-md-2 pl-0 ml-1">
                            <div className="col-1 pl-0 ">
                                <span className="number heading-2">02</span>
                            </div>
                            <div className="col-9 pl-md-0 pl-3">
                                <p className="heading_12 heading-2">WHAT MAKES YOUR MASTERMIND DIFFERENT THAN OTHERS?</p>
                            </div>
                            <div className="col-2 text-right pr-0 sis pt-1">
                                <img src={require('../../img/plus.png')} className="plus" id="plus-2" />
                                <img src={require('../../img/minus.png')} className="minus" id="minus-2" />
                            </div>
                            <div>
                                <p className="pera-3 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreatsand business hackathons in the digital nomad spirt. For these, we meet in person for focused work and personal develpoment sessions.</p>
                            </div>
                        </div>
                        
                        <div className="row bottom_border pt-1 pl-md-2 pl-0 ml-1">
                            <div className="col-1 pl-0">
                                <span className="number heading-3">03</span>
                            </div>
                            <div className="col-8 pl-md-0 pl-3">
                                <p className="heading_12 heading-3">HOW DOES BETTER TOGETHER WORK?</p>
                            </div>
                            <div className="col-3 text-right pr-0 sis pt-1">
                                <img src={require('../../img/plus.png')} className="plus" id="plus-3" />
                                <img src={require('../../img/minus.png')} className="minus" id="minus-3" />
                            </div>
                            <div>
                                <p className="pera-4 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreatsand business hackathons in the digital nomad spirt. For these, we meet in person for focused work and personal develpoment sessions.</p>
                            </div>
                        </div>
                         
                        <div className="row bottom_border pt-2 pl-md-2 pl-0 ml-1">
                            <div className="col-1 pl-0">
                                <span className="number heading-4">04</span>
                            </div>
                            <div className="col-9 pl-md-0 pr-md-0 pr-2 pl-3">
                                <p className="heading_12 heading-4">HOW MANY PEOPLE WILL BE IN MY MASTERMIND?</p>
                            </div>
                            <div className="col-2 text-right pr-0 sis pt-1">
                                <img src={require('../../img/plus.png')} className="plus" id="plus-4" />
                                <img src={require('../../img/minus.png')} className="minus" id="minus-4" />
                            </div>
                            <div>
                                <p className="pera-5 ml-lg-5 pr-5 mt-1">we've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreatsand business hackathons in the digital nomad spirt. For these, we meet in person for focused work and personal develpoment sessions.</p>
                            </div>
                        </div>
                        
                        <div className="row bottom_border pt-2 pl-md-2 pl-0 ml-1">
                            <div className="col-1 pl-0">
                                <span className="number heading-5">05</span>
                            </div>
                            <div className="col-9 pr-md-0 pr-2 pl-md-0 pl-3">
                                <p className="heading_12 heading-5">IS THERE A LIMIT TO THE NUMBER OF PEOPLE THAT CAN JOIN THE NETWORK?</p>
                            </div>
                            <div className="col-2 text-right pr-0 sis pt-1">
                                <img src={require('../../img/plus.png')} className="plus" id="plus-5" />
                                <img src={require('../../img/minus.png')} className="minus" id="minus-5" />
                            </div>
                            <div>
                                <p className="pera-6 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreatsand business hackathons in the digital nomad spirt. For these, we meet in person for focused work and personal develpoment sessions.</p>
                            </div>
                        </div>
                        
                        <div className="row bottom_border pt-1 pl-md-2 pl-0 ml-1">
                            <div className="col-1 pl-0">
                                <span className="number heading-6">06</span>
                            </div>
                            <div className="col-9 pr-md-0 pr-2 pl-md-0 pl-3">
                                <p className="heading_12 heading-6">ARE THERE ANY EVENTS WITH THE ENTIER NETWORK?</p>
                            </div>
                            <div className="col-2 text-right pr-0 sis pt-1">
                                <img src={require('../../img/plus.png')} className="plus" id="plus-6" />
                                <img src={require('../../img/minus.png')} className="minus" id="minus-6" />
                            </div>
                            <div>
                                <p className="pera-7 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreatsand business hackathons in the digital nomad spirt. For these, we meet in person for focused work and personal develpoment sessions.</p>
                            </div>
                        </div>
                        
                        <div className="row pl-md-2 pt-1 pl-0 ml-1">
                            <div className="col-1 pl-0">
                                <span className="number_1 heading_4 pl-1">07</span>
                            </div>
                            <div className="col-7 pl-md-0 pl-3">
                                <p className="heading_12 heading_4">ARE THERE ANY LIVE EVENTS?</p>
                            </div>
                            <div className="col-4 text-right pr-0 sis pt-1">
                                <img src={require('../../img/plus.png')} className="plus" id="plus" />
                                <img src={require('../../img/minus.png')} className="minus" id="minus" />
                            </div>
                            <div>
                                <p className="pera-1 ml-lg-4 pl-3 pr-4">we've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreatsand business hackathons in the digital nomad spirt. For these, we meet in person for focused work and personal develpoment sessions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="pl-md-5 pl-0 ml-lg-3 ml-0 pt-2 mt-5 FREQUENTLY_ASKED_1">
                            <p className="pb-0 mb-0 fraq">FREQUENTLY ASKED</p>
                            <h1 className="ignore-1-1 ">QUESTI<img src={require('../../img/Layer_123.png')} className="layer_12121" />NS</h1>
                            <img src={require('../../img/line.png')} className="lnise" />
                        </div>
                        <div className="text-center ml-1 FREQUENTLY_ASKED_1">
                            <img src={require('../../img/FAQ.png')} className="faq_img FREQUENTLY_ASKED_1" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="banner_4">
                <div className="container pt-5 text-center">
                    <h6 className="pt-5 member">MEMBER</h6>
                    <h1 className="ignore_45 text-white">TESTIM<img src={require('../../img/Layer_121.png')} className="data_image data_image_12"/>NIALS</h1>
                    <img src={require('../../img/Shape_1396 copy_2.png')} className="lnise-1"/>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row cardsss ">
                    <div className="col-md-10 col-12 m-auto">
                        <div id="carouselExampleIndicators" className="carousel slide h-50" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-12 text_field ">
                                            <div className="row w-100 pl-5 ml-2 mt-3">
                                                <div className="col-3 col-lg-4"></div>
                                                <div className="col-9 col-lg-8">
                                                    <h5 className="ignore_4 insgd">Author & Podcaster Extraordinaire </h5>
                                                    <div className="textsss">
                                                        <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth & learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”</p>
                                                        <h6 className="ignore_5 quin">-OUIN, HOST OF MANIA PODCAST</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-12 text_field ">
                                            <div className="row w-100 pl-5 ml-2 mt-3">
                                                <div className="col-3 col-lg-4"></div>
                                                <div className="col-9 col-lg-8">
                                                    <h5 className="ignore_4 insgd">Author & Podcaster Extraordinaire </h5>
                                                    <div className="textsss">
                                                        <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth & learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”</p>
                                                        <h6 className="ignore_5 quin">-OUIN, HOST OF MANIA PODCAST</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-12 text_field">
                                            <div className="row w-100 pl-5 ml-2 mt-3">
                                                <div className="col-3 col-lg-4"></div>
                                                <div className="col-9 col-lg-8">
                                                    <h5 className="ignore_4 insgd">Author & Podcaster Extraordinaire </h5>
                                                    <div className="textsss">
                                                        <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth & learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”</p>
                                                        <h6 className="ignore_5 quin">-OUIN, HOST OF MANIA PODCAST</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mobile-auths">
                    <div id="carouselExampleIndicators" className="carousel slide h-50" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="row">
                                <div className="col-10 m-auto">
                                    <div className="row mt-3">
                                        <div className="col-12 mobile-auth">
                                            <h5 className="ignore_4 insgd">Author & Podcaster Extraordinaire </h5>
                                            <div className="">
                                                <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth & learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”</p>
                                                <h6 className="ignore_5 quin ml-0">-OUIN, HOST OF MANIA PODCAST</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-10 m-auto">
                                        <div className="row mt-3">
                                            <div className="col-12 mobile-auth">
                                                <h5 className="ignore_4 insgd">Author & Podcaster Extraordinaire </h5>
                                                <div className="">
                                                    <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth & learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”</p>
                                                    <h6 className="ignore_5 quin ml-0">-OUIN, HOST OF MANIA PODCAST</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-10 m-auto">
                                        <div className="row mt-3">
                                            <div className="col-12 mobile-auth">
                                                <h5 className="ignore_4 insgd">Author & Podcaster Extraordinaire </h5>
                                                <div className="">
                                                    <p className="pera_2 per text-dark text-left pt-2 mt-1">“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth & learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”</p>
                                                    <h6 className="ignore_5 quin ml-0">-OUIN, HOST OF MANIA PODCAST</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
            <div className="conatiner_fuild">
                
            </div>
            <div className="container">
                <div className="mt-md-0 mt-5 text-center pt-md-4 pt-0 we_are_better">
                    <h3 className="fraq-1">WE'RE BETTER</h3>
                    <h1 className="ignore_3 gether_12" style={ignoreStyle}>T<img src={require('../../img/Layer_123.png')} className="data_image" />GETHER</h1>
                    <img src={require('../../img/line.png')} className="line_1"/>
                </div>
                <div className="row">
                    <div className="col-md-11 m-xl-auto m-lg-0 m-auto">
                        <div className="row">
                            <div className="col-lg-4 pr-0 col-md-6">
                                <div className=" bg-img-1 posit">
                                    <div className="text-center mt-4 pt-md-4 pt-5">
                                        <img src={require('../../img/Layer_262.png')} className="layer_262"/>
                                        <div className="row">
                                            <div className="col-md-10 m-auto">
                                                <h3 className="ignore_6">APPLY & GET MATCHED WITH YOUR TRIBE.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className=" bg-img-1">
                                    <div className="text-center mt-4 pt-md-4 pt-5">
                                        <img src={require('../../img/Layer_263.png')} className="layer_262"/>
                                        <div className="row">
                                            <div className="col-2 text-left pl-4">
                                                <img src={require('../../img/layer_122.png')} className="arrow"/>
                                            </div>
                                            <div className="col-8">
                                                <h3 className="ignore_6 meet_weekly">MEET WEEKLY <br/>IN A CURATED SMALL GROUP.</h3>
                                            </div>
                                            <div className="col-2 pl-1">
                                                <img src={require('../../img/layer_122.png')} className="arrow-1"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className=" bg-img-1 posit_1">
                                    <div className="text-center mt-4 pt-md-4 pt-5">
                                        <img src={require('../../img/Layer_264.png')} className="layer_262"/>
                                        <div className="row">
                                            <div className="col-md-10 m-auto">
                                                <h3 className="ignore_6">TRACK YOUR PROGRESS USING OUR TOOLS.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_7">
                <div className="container container_1 pt-5 pl-xl-5">
                    <div className="row join_us pl-xl-5">
                        <div className="col-lg-5">
                            <h4 className="text-white join_us_1">JOIN US!</h4>
                            <h1 className="ignore_2 community text-white">C<img src={require('../../img/Layer_121.png')} className="imgs_data"/>MMUNITY</h1>
                            <img src={require('../../img/Shape_1396 copy_2.png')} className="shape" />
                            <div className="row">
                                <div className="col-lg-7 pr-0">
                                    <h5 className="text-white font-weight-bold mb-0 chosen_1">MEMBERSHIP DUES ARE</h5>
                                    <p className="text-white pt-0 chosen">Members are selectively chosen.</p>
                                </div>
                                <div className="col-md-5 pl-lg-0 pl-4">
                                    <button className="bnt_3">$67/MONTH</button>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-md-7">
                            <div>
                                <input type="text" className="form-control mt-3 inpt" name="" placeholder="Enter Your Email Address" />
                                <button className="bnt_2">JOIN US</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row" id="instafeed"></div>
                </div>
            </div>
            <div className="container pb-5 mt-3 pt-1">
                <div className="row">
                    <div className="col-md-10 m-auto pl-gl-0 pr-lg-0">
                        <div className="row brde pb-4">
                            <div className="col-sm-3 col-7">
                                <img src={require('../../img/footer_logo.png')} className="w-100" />
                            </div>
                            <div className="col-sm-9 mt-3 pr-0">
                                <div className="float-right pr-2">
                                    <ul className="nav">
                                        <li className="nav-item pl-md-4 pl-0">
                                            <h6 className="nav-link">Home</h6>
                                        </li>
                                        <li className="nav-item pl-md-4 pl-0">
                                            <h6 className="nav-link" href="#">Why This Project?</h6>
                                        </li>
                                        <li className="nav-item pl-md-4 pl-0">
                                            <h6 className="nav-link" href="#">Our Values</h6>
                                        </li>
                                        <li className="nav-item pl-md-4 pl-0">
                                            <h6 className="nav-link" href="#">Application</h6>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-9 pl-md-0 pl-4">
                                    <div className="copy-right_1 pt-4">
                                        <p className="mb-0 pb-0 mt-4 float-left copy_right">&#9400; 2019 <span className="better">BETTER TOGETHER.</span> All Right Reserved. </p>
                                        <div className="float-left ml-3 mt-4 brdss">Privacy Policy</div>
                                        <div className="mt-4 ml-3 float-left brdss">Term and Conditions</div> 
                                    </div>
                                </div>
                                <div className="col-3 mt-4 pt-3 pl-lg-4">
                                    <div className="text-right">
                                        <div className="row mt-md-0 mt-3 ml-lg-2">
                                            <div className="col-md-5">
                                            </div>
                                            <div className="col-md-3 mt-md-0 mt-4 pt-md-0 pt-2">
                                                <a href="https://www.instagram.com/we_are_bettertogether/">
                                                    <div className="msg">
                                                        <img src={require('../../img/Layer_44.png')} className="imgssss" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-md-4 mt-md-0 mt-2">
                                                <a href="mailto:andrew@bettertogethermm.com">
                                                    <div className="msg">
                                                        <img src={require('../../img/Shape_1419.png')} className="imgssss" />
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
        </div>
        )
    }

}
export default Jquery; 