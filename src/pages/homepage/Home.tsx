import { FunctionComponent } from "react";

import './Home.scss'

interface HomeProps {
    popularCallback: Function;
    luckyCallback: Function;
}

const Home: FunctionComponent<HomeProps> = ({ popularCallback, luckyCallback }) => {
    return (
        <div className="home">
            <div className="controls">
                <button onClick={() => popularCallback()} className="cta left">Most Popular</button>
                <button onClick={() => luckyCallback()} className="cta right">Feeling Lucky</button>
            </div>
        </div>
    );
}

export default Home;