import * as React from "react";
import { useEffect, useState, useRef } from "react";
import * as styles from "./slideshow.module.css";

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const slides = [
        '/drives/Easter_GemFoundation/drive_4.jpg',
        '/drives/Easter_GemFoundation/image(2).jpg',
        '/drives/Easter_GemFoundation/drive_4_2.jpg',
    ];

    const slideRefs = useRef([]);
    const startX = useRef(0);
    const endX = useRef(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setPrevSlide(currentSlide);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Function to go to the previous slide
    const prevSlideFunc = () => {
        setPrevSlide(currentSlide);
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
        );
    };

    // Auto slide every 7 seconds, always sliding left
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setPrevSlide(currentSlide);
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 7000);
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    // Handle swipe start
    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    // Handle swipe end
    const handleTouchEnd = () => {
        if (startX.current > endX.current + 50) {
            nextSlide();
        } else if (startX.current < endX.current - 50) {
            prevSlideFunc();
        }
    };

    // Track touch movement
    const handleTouchMove = (e) => {
        endX.current = e.touches[0].clientX;
    };

    return (
        <div
            className={styles.slideshowContainer}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <div className={styles.slides}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        ref={(el) => (slideRefs.current[index] = el)}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''} ${index === prevSlide ? styles.prev : ''} ${index === (currentSlide + 1) % slides.length ? styles.next : ''}`}
                    >
                        <img className={styles.slideImg} src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                        onClick={() => {
                            setPrevSlide(currentSlide);
                            setCurrentSlide(index);
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
