// React
import type { FC, ReactElement } from 'react';

// Components
import Search from '../Search'

const Header: FC = (): ReactElement => {
    return(
        <header>
            <div className="container mx-auto">
                <div className="lg:flex lg:justify-center py-5">
                    <div className="lg:w-1/2">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;