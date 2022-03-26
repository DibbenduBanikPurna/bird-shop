import React from 'react';

const Bird = ({ bird, handleCart }) => {
    const { name, id, price, image } = bird
    return (
        <div className='col-md-4'>
            <div className='card'>

                <div className='card-body'>
                    <img className='img-fluid' src={image} alt={id} />
                    <h4>{name}</h4>
                    <p>${price}</p>
                    <button onClick={() => handleCart(bird)} className='btn btn-info'>buy now</button>

                </div>
            </div>

        </div>
    );
};

export default Bird;