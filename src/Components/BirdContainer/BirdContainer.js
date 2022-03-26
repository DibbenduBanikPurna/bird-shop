import React, { useState } from 'react';
import Birds from '../Birds/Birds';
import Cart from '../Cart/Cart';

const BirdContainer = () => {
    const [cartItem, setCartItem] = useState([])

    const handleCart = (bd) => {
        //console.log(bd)
        setCartItem([...cartItem, bd])
    }


    const handleRandom = () => {
        const random = Math.floor(Math.random() * cartItem.length);
        const remailCart = [cartItem[random]]

        console.log(random)
        setCartItem(remailCart)
    }
    const handleDelete = (id) => {
        const remain = cartItem.filter((cart) => cart.id !== id)
        setCartItem(remain)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <Birds handleCart={handleCart} />

                </div>
                <div className='col-md-4 mt-4 pt-4'>
                    <h4>Selected Birds</h4>
                    {

                        cartItem.map((cart) => {
                            return <Cart key={cart.id} handleDelete={handleDelete} cart={cart} />
                        })
                    }
                    <div>
                        <button onClick={handleRandom} className='btn btn-success'>Choose 1 for me</button>
                        <br />
                        <button className="btn btn-danger" onClick={() => setCartItem([])}>Choose Again</button>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default BirdContainer;