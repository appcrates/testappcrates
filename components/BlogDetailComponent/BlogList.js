import React, { Component } from 'react';
import Head from 'next/head';
import BlogDtailInner from './Blogdetailinnercomponent/BlogdetailInner'
import RelatedPost from './RelatedPostcomponent/relatedPost'
import Footer from './FooterComponent/Footer'

const rowIndex = {
    alignItems: 'baseline',
};

class BlogList extends Component{

    render() {
        return (
            
            <div>
                <Head>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
                </Head>
                <div className="bg-image">
                    {/* <Header/> */}
                        <div className="container pt-5">
                            <div className="row pt-4" style={rowIndex}>
                                <div className="col-lg-6">
                                    <div className="">
                                        <h1 className="pl-3 pb-4 text-white font-weight-bold blog_page">BL
                                        <img src='./images/O_logo.png' className="layer mr-1"/>G PAGE
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 pb-5 mb-5 text-center">
                                    <img src='./blogdetails/banner_img.png' className="w-50"/>
                                </div>
                            </div>
                        </div>
                </div>
                <BlogDtailInner/>
                <RelatedPost/>
                <Footer/>
                <style jsx>{`
                        .bg-image{
                            background-image: url(./images/Banner.png);
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: bottom;
                        }
                        .blog_page{
                            font-size: 64px;
                        }
                        .layer{
                            width: 10.5%;
                            margin-top: -10px;
                        }
                        @media only screen and(max-width:800px){
                            .blog_page{
                                font-size: normal;
                            }
                        }
                        @media only screen and (min-width: 993px){
                            .container {
                                width: 80%;
                            }
                        }
                `}</style>
            </div>
        )
    }
}
export default BlogList