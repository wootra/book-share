import Slider from 'react-slick';
import styles from './MarketingCarousel.module.css';
import myPrincessImage from './assets/my-princess.jpeg';
import CarouselItem from '../CarouselItem';

const MarketingCarousel = () => {
    const marketingObj = [
        { title: 'Little Princess', image: myPrincessImage },
        { title: 'Little Princess', image: myPrincessImage },
        { title: 'Little Princess', image: myPrincessImage },
        { title: 'Little Princess', image: myPrincessImage },
        { title: 'Little Princess', image: myPrincessImage },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={`${styles.carouselWrapper} bg-red-50`}>
            <Slider {...settings}>
                {marketingObj.map((item, index) => (
                    <CarouselItem
                        key={item.title + index}
                        title='Little Princess'
                        image={myPrincessImage}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default MarketingCarousel;
