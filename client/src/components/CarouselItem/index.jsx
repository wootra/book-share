import PropTypes from 'prop-types';
import styles from './index.module.css';

const CarouselItem = ({ children, className, image, title }) => {
    return (
        <div className={`${styles.item} ${className || ''}`}>
            <div className={styles.hoverArea}>
                <h3 className={styles.initTitle}>{title}</h3>
                <div className={styles.details}>
                    <h3> {title}</h3>
                </div>

                <img
                    className={`${styles.carouselImageBack} ${styles.carouselImage}`}
                    src={image}
                    alt=''
                />
                <img
                    className={`${styles.carouselImage} active`}
                    src={image}
                    alt={title}
                />
                {children ?? ''}
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
};

export default CarouselItem;
