import React, { useState, useEffect, Children, useRef } from 'react';
import Controller from './components/Controller';
import './app.css';


function Slider(props) {
    const sliderRef = useRef();

    const [childsCount, setchildsCount] = useState(0);
    const [x, setX] = useState(0);
    const [showIndex, setShowIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const [duration, setDuration] = useState(0);

    let click = false;

    useEffect(() => {
        const newChildsCount = Children.count(props.children);
        if (newChildsCount) {
            setchildsCount(newChildsCount);

            if (props.autoPlay) {
                if (props.duration !== 0) {
                    setAutoPlay(true);
                    setDuration(props.duration * 1000);
                }
            }
        }
    }, [props]);

    function nextSlide() {
        click = true; 
        const childrens = sliderRef.current.children;
        const nextChild = showIndex + 1;

        if (childrens[nextChild]) {
            setShowIndex(nextChild);
            setX(x + 100);
        }
        else {
            setX(0);
            setShowIndex(0);
        }
    }

    function prevSlide() {
        click = true;
        const childrens = sliderRef.current.children;
        const prevChild = showIndex - 1;
        const lastChild = childrens.length - 1;

        if (childrens[prevChild]) {
            setShowIndex(prevChild);
            setX(x - 100);
        }
        else {
            setShowIndex(lastChild);
            setX(100 * (lastChild));
        }
    }

    function selectDot(id) {
        click = true;
        setShowIndex(id);
        setX(100 * id);
    }

    function play() {
        if (click) {
            console.log('OK');
        }
        else {
            const childrens = sliderRef.current.children;
            const nextChild = showIndex + 1;

            if (childrens[nextChild]) {
                setShowIndex(nextChild);
                setX(x + 100);
            }
            else {
                setX(0);
                setShowIndex(0);
            }
        }
    }

    if (autoPlay) {
        if (duration !== 0) {
            const autoPlay = setInterval(() => {
                play();
                clearInterval(autoPlay);
            }, duration);
        }
    }

    return (
        <article>
            <article className="slider" ref={sliderRef}>
                {
                    Children.map(props.children, child => (
                        <article className='slide' style={{ transform: `translateX(-${x}%)` }}>
                            {child}
                        </article>
                    ))
                }
            </article>
            <article className="controller">
                <Controller
                    next={nextSlide}
                    prev={prevSlide}
                    childsCount={childsCount}
                    dotsCount={childsCount}
                    selectedDot={showIndex}
                    selectDot={selectDot}
                />
            </article>
        </article>
    );
}

export default Slider;