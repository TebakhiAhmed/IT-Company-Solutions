import React, { useEffect, useMemo } from 'react';
import { iconsRow1 } from '../animationbar/IconsLink';
import './AnimationBubblesCSS.css';

const AnimationBubble = () => {
    const texts = useMemo(() => {
        return iconsRow1.map(item => item.name);
    }, []);

    useEffect(() => {
        var bubbles = document.querySelectorAll('.bubble');

        bubbles.forEach(function (bubble, index) {
            bubble.setAttribute('data-text', texts[index]);
        });
    }, [texts]);

    console.log(texts);

    return (
        <div className='container-bubble '>
            <div className='flex flex-col lg:flex-row justify-between px-2 lg:px-44 pt-5'>
                <h1 className='flex justify-center text-4xl lg:text-6xl font-bold text-white'>Our Tech Stacks</h1>
                <p className='flex justify-center mt-4 lg:text-xl text-white lg:w-[30rem] text-center'>Get IT experts to deliver tasks with optimal budgets in light of the expense gaps of Vietnam outsourcing market.</p>
            </div>
            <div id="background-wrap">
                <div className="bubble x1"></div>
                <div className="bubble x2"></div>
                <div className="bubble x3"></div>
                <div className="bubble x4"></div>
                <div className="bubble x5"></div>
                <div className="bubble x6"></div>
                <div className="bubble x7"></div>
                <div className="bubble x8"></div>
                <div className="bubble x9"></div>
                <div className="bubble x10"></div>
            </div>
        </div>
    );
}

export default AnimationBubble;
