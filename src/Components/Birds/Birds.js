import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';

const Birds = ({ handleCart }) => {
    const [bird, setBird] = useState([])
    useEffect(() => {
        fetch('bird.json')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setBird(data)
            })
    }, [])
    return (
        <div className='row'>
            <p>birds:{bird.length}</p>
            {
                bird.map((bird) => {
                    return <Bird handleCart={handleCart} key={bird.id} bird={bird} />
                })
            }


        </div>
    );
};

export default Birds;