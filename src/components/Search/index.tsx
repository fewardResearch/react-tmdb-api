// React
import { useState } from 'react';
import type { FC, ReactElement } from 'react';

// Redux
import { useAppDispatch } from '../../app/hooks';
import { setSearch } from '../../features/search'

// Utils
import { getData } from '../../utils/request'; 
import { endpoint } from '../../utils/request';

// Types
import { Product, Types } from '../../types/enum'

const Search: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const [keyword, setKeyword] = useState<string>("");

    return(
        <div className="flex border border-red-600">
            <div className="flex-1">
                <input type="text" className="focus:outline-none w-full text-lg py-2 px-5" value={keyword} onChange={(event) => setKeyword(event.currentTarget.value)} />
            </div>
            <div>
                <button className="focus:outline-none bg-red-600 text-white px-5 h-full" onClick={() => getData(endpoint({
                    type: Types.search,
                    name: Product.movies,
                    keyword: keyword,
                    page: 1
                })).then(data => dispatch(setSearch(data)))}>Search</button>
            </div>
        </div>
    );
};

export default Search;
