import React from 'react';
import order from '../../assets/icons/ordersuccess.png'

const OrderSuccessModal = () => {
    return (
        <div>
            <img src={order} alt="" />
            <h1 className='text-primary text-xl font-semibold mt-5'>Thank you for your order.</h1>
            <p>We sent an order confirmation to:</p>
            <p className='text-primary font-semibold'>johnsmith@gmail.com</p>
            <p>Your order number is:</p>
            <p className='text-primary font-semibold'> #343895</p>
            <p> Your order will deliver on:</p>
            <p className='text-primary font-semibold'> Thursday, Nov 23 - Saturday, Nov 29</p>
            <p> to the address:</p>
            <p className='text-primary font-semibold'>3829 Main St.</p>
        </div>
    );
};

export default OrderSuccessModal;