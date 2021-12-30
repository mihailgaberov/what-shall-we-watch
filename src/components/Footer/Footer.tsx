import { FunctionComponent } from "react";

import './Footer.scss'

interface FooterProps {
    prevCallback: Function;
    nextCallback: Function;
}

const Footer: FunctionComponent<FooterProps> = ({ prevCallback, nextCallback }) => {
    return (
        <footer>
            <button disabled onClick={() => prevCallback()} className="cta left">Prev</button>
            <button onClick={() => nextCallback()} className="cta right">Next</button>
        </footer>
    );
}

export default Footer;