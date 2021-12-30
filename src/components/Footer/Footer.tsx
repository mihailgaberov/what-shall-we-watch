import { FunctionComponent } from "react";

import './Footer.scss'

interface FooterProps {
    prevCallback: Function;
    nextCallback: Function;
    isPrevButtonDisabled: boolean;
}

const Footer: FunctionComponent<FooterProps> = ({ prevCallback, nextCallback, isPrevButtonDisabled }) => {
    console.log(isPrevButtonDisabled)
    return (
        <footer>
            <button disabled={isPrevButtonDisabled} onClick={() => prevCallback()} className="cta left">Prev</button>
            <button onClick={() => nextCallback()} className="cta right">Next</button>
        </footer>
    );
}

export default Footer;