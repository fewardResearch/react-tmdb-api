// React
import type { FC, ReactElement } from 'react';

// Components
import Movies from '../components/Movies';

const Home: FC = (): ReactElement => {
    return(
        <div className="container mx-auto px-5 md:px-0">
            <Movies />
        </div>
    );
};

export default Home;