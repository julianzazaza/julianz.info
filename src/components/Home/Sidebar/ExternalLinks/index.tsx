import React from 'react';
import rgbdot from './rgbdot.gif';

const ExternalLinks = () => {
    return (<>
        <center><h2>EXTERNAL LINKS</h2></center>
        <hr />
        <p>
            <h3>
                <img src={rgbdot} alt="dot" /> <a href="https://www.linkedin.com/in/jzabala/">LinkedIn</a>
            </h3>
            <h3>
                <img src={rgbdot} alt="dot" /> <a href="https://github.com/codejulen">Github</a>
            </h3>
            <h3>
                <img src={rgbdot} alt="dot" /> <a href="https://github.com/codejulen/julianz.info">Source Code For This</a>
            </h3>
        </p>
    </>)
};
export default ExternalLinks;