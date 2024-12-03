import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import specialProducts from '../utils/SpecialProducts';
import { useCart } from './CartContext';
import { LuIndianRupee } from "react-icons/lu";


const SpecialProducts = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const currentDate = new Date();
            const targetDate = new Date();
            targetDate.setDate(currentDate.getDate() + 5);
            targetDate.setHours(0, 0, 0, 0);

            const difference = targetDate.getTime() - currentDate.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000); // Recalculate every second
        return () => clearInterval(timer);
    }, []);
    const { addToCart } = useCart();

    return (
        <>
            <div className='d-flex  gap-15'>
                {
                    specialProducts?.map((i, j) => {
                        return (
                            <div className='special-product-card  d-flex'>
                                 <div>
                                        <img src={i.image} className='img-fluid' alt='products' />
                                    </div>

                                <div className='d-flex   justify-content-between'>
                                   
                                    <div className='special-product-contant '>
                                        <h5 className='brand'> {i.title}</h5>
                                        <h6 className='title'>{i.tagline}</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={i.rating}
                                            edit={false}
                                        />
                                        <p className='price'>
                                            <span className='red-p'><LuIndianRupee />{i.priceAfter}</span>&nbsp;<strike>{i.priceBefore}</strike>
                                        </p>
                                        <div className='discount-till d-flex align-items-center gap-10'>
                                            <p className='mb-0 color-black'>
                                                <b>{timeLeft.days}</b>days
                                            </p>
                                            <div className='timer d-flex gap-15 align-items-center'>
                                                <span className='badge rounded-circle p-3 bg-danger'>{timeLeft.hours}</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>{timeLeft.minutes}</span>:
                                                <span className='badge rounded-circle p-3 bg-danger'>{timeLeft.seconds}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='border-0 bg-transparent' onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                addToCart(i);
                                            }}>
                                                <Link className='button'>Add to cart</Link>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default SpecialProducts;
