import { IEndpointOptions } from '../types/function';

import { Product, Types } from '../types/enum'

const endpoint = (options: IEndpointOptions): string => {
    const baseURL = "https://api.themoviedb.org/3/";

    if(options.type === Types.search && options.name === Product.movies) {
        return baseURL + "search/movie?api_key=350f2a9d0b23b6c84ff314ab8c6c7ac2&language=en-US&page=1&include_adult=false&query=" + encodeURI(options.keyword);
    }

    return baseURL + "search/movie?api_key=350f2a9d0b23b6c84ff314ab8c6c7ac2&language=en-US&page=1&include_adult=false&query=" + encodeURI(options.keyword);
};

const getData = (endpoint: string) => {
    const resData = fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));

    return resData;
};

export {
    getData,
    endpoint
}