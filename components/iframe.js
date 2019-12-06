
const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    return (
        <div className="iframe-container">
            <div className="emdeb-responsive">
                <iframe src={source}></iframe>
            </div>
            <style jsx>{`
                .iframe-container {
                    width: 80%;
                    display: block;
                    margin: auto;
                }
                iframe {
                    border-radius: 30px;
                    margin-top: 100px;
                    width: 100%;
                    height: 700px;
                }
            `}</style>
        </div>
    );
};


<div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https:/
/admin.typeform.com/sig
nup ? utm_campaign = QZWpxN & utm_source = typeform.com - 14567325 - Professional & utm_medium = typeform & utm_content = typeform - embedded - poweredbytypeform & utm_term = EN" style="
color: #999
" target="
_blank
">Typeform</a> </div>


export default Iframe;