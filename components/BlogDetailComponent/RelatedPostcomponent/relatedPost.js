import React, {Component} from 'react'

const Shape = {
    width: '4% !important',
}

class RelatedPost extends Component{

    render() {
        return (
            <div>
                <div className="bg-image">
                    <div className="container">
                        <h1 className="ignore_3 text-center">RELATED P<img src="./blogdetails/posts_icon.png" className="imgs_data" style={Shape}/>ST</h1>
                    </div>
                    
                </div>
                <style jsx>{`
                    .bg-image{
                        background-image: url(./blogdetails/Shape_1436.png);
                        background-size: cover;
                        margin-top: 60px;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 880px;
                    }
                    .banner_7{
                        margin-top:-100px !important;
                    }
                    .imgs_data{
                        width: 10%;
                        margin-top: -8px;
                    }
                    .ignore_3{
                        width: 100%;
                        letter-spacing: 0px;
                        font-size: 55px;
                        padding-top: 90px;
                        color: #345771;
                        font-weight: 800;
                    }
                    @media only screen and (max-width: 800px){
                        .ignore_3{
                            font-size: 34px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}
export default RelatedPost