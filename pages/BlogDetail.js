import React, { Component } from 'react';
import Head from 'next/head';
import BLOGLIST from '../components/BlogDetailComponent/BlogList'

class Blog extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="blog_detail">
                <Head>
                    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"/>
                    <link rel="stylesheet" type="text/css" href="./slick-theme.css"/>
                    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>
                </Head>
                <BLOGLIST/>
                <style jsx>{`
                    body{
                        font-family: proxima-nova, sans-serif !important;
                    }
                `}</style>
            </div>
        )
    }
}

export default Blog;