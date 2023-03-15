import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {

    const ninjaList = ninjas.map(ninja => {

        return ((ninja) ? (
            <div className='ninja' key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                <br />
                <br />
            </div>
        ) : (
            null
        ))
    });

    return (
        <div className='ninja-list'>
            { ninjaList }
        </div>
    )
}

export default Ninjas;