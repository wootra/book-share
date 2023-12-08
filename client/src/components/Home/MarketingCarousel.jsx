import { Component } from 'react';
import Slider from 'react-slick';
import styles from './MarketingCarousel.module.css';
import myPrincessImage from './assets/my-princess.jpeg';
import CarouselItem from '../CarouselItem';

export default class MarketingCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className={styles.carouselWrapper}>
                <Slider {...settings}>
                    <CarouselItem
                        className='bg-white'
                        title='Little Princess'
                        image={myPrincessImage}
                    />
                    <CarouselItem
                        className='bg-white'
                        title='Little Princess'
                        image={myPrincessImage}
                    />
                    <CarouselItem
                        className='bg-white'
                        title='Little Princess'
                        image={myPrincessImage}
                    />
                    <CarouselItem
                        className='bg-white'
                        title='Little Princess'
                        image={myPrincessImage}
                    />
                </Slider>
            </div>
        );
    }
}
