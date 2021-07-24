const imagePath = (src: string | null): string => {
    if(src) return "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + src;
    return "https://via.placeholder.com/500x700";
};

export {
    imagePath
}