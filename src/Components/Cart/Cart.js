import React from 'react';
import { FaBeer, AiFillDelete } from 'react-icons/fa';

const Cart = ({ cart, handleDelete }) => {
    console.log(cart)
    return (
        <div>
            <img style={{ height: '30px' }} className="img-fluid rounded-circle" src={cart.image} alt="" />
            <span className='m-3'>{cart.name}</span>
            <span onClick={() => handleDelete(cart.id)}> <FaBeer /> </span>

        </div>
    );
};

export default Cart;