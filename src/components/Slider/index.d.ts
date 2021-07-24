import type { ReactNode } from 'react';

export interface ISlickOptions {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    spaceBetween?: number;
    responsive?: {
        breakpoint: number
        settings: {
            dots?: boolean;
            infinite?: boolean;
            speed?: number;
            slidesToShow?: number;
            slidesToScroll?: number;
            arrows?: boolean;
            autoplay?: boolean;
            autoplaySpeed?: number;
            spaceBetween?: number;
        }
    }[]
}

export default interface ISlider {
    settings: ISlickOptions
    className?: string;
    children: ReactNode;
    gutters?: number;
}
