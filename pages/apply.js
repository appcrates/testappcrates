import Head from 'next/head';
import Header from "../components/Header";
import Iframe from "../components/iframe";
import React from "react";

const Apply = () => {
    return (
        <div className="banner">
            <Head>
                <title>Application Form</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                {/*<script type="text/javascript" src="https://embed.typeform.com/embed.js"/>*/}
            </Head>
            <Header/>
            <Iframe
                source='https://bt-network.typeform.com/to/QZWpxN'>
            </Iframe>

            <style jsx>{`
                .banner{
                    background-image: url(./images/Banner.png);
                    background-position: bottom;
                    background-size: cover;
                    background-repeat: no-repeat;
                    height: auto;
                    padding-bottom:120px;
                    font-family: proxima-nova, sans-serif;
                    font-style: normal;
}
            `}</style>
        </div>

    )
};

export default Apply;



