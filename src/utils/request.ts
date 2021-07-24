import { IEndpointOptions } from '../types/function';

import { Product, Types, Languages } from '../types/enum'

const endpoint = (options: IEndpointOptions): string => {
    const apiKey = "350f2a9d0b23b6c84ff314ab8c6c7ac2";
    const baseURL = "https://api.themoviedb.org/3/";

    if(options.type === Types.search && options.name === Product.movies) {
        return baseURL + `search/movie?api_key=${apiKey}&language=${Languages.tr}&page=${options.page}&include_adult=false${options.keyword ? "&query=" + encodeURI(options.keyword) : ""}`;
    }
    
    else if(options.type === Types.movies && options.name === Product.popular) {
        return baseURL + `movie/popular?api_key=${apiKey}&language=${Languages.tr}&page=${options.page}&include_adult=false${options.keyword ? "&query=" + encodeURI(options.keyword) : ""}`;
    }

    return baseURL + `movie/popular?api_key=${apiKey}&language=${Languages.tr}&page=${options.page}&include_adult=false${options.keyword ? "&query=" + encodeURI(options.keyword) : ""}`;
};

const getData = (endpoint: string) => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
};

export {
    getData,
    endpoint
}