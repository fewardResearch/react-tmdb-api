// React
import type { FC, ReactElement } from 'react';
import ReactSlider from 'react-slick';

// Slick
import 'slick-carousel/slick/slick.css';

// Interface
import ISlider, { ISlickOptions } from './index.d';

const Slider: FC<ISlider> = ({ settings, className, children, gutters }: ISlider): ReactElement<ISlider> => {
    return(
        <ReactSlider {...settings} className={`${className ? className : ""} ${gutters ? `md:-mx-${gutters}`: ""}`}>
            {children}
        </ReactSlider>
    );
};

export default Slider;

export type {
    ISlider,
    ISlickOptions
}