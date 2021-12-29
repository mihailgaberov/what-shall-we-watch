import { FunctionComponent } from "react";

import './Home.scss'

const Home: FunctionComponent = () => {
    return (
        <div className="home">
            <div className="controls">
                <button onClick={() => console.log('popular')} className="cta left">Most Popular</button>
                <button onClick={() => console.log('lucky')} className="cta right">Feeling Lucky</button>
            </div>
        </div>
    );
}

export default Home;