import { forwardRef } from 'react';
import '../styles/bod.css';


// eslint-disable-next-line react/display-name
const BodTile = forwardRef(
    (
        {
            photo,
            name,
            title
        },
        ref
    ) => {
    
    return (
        <>
            <div className='bodTile'>
                <img className="bodPhoto" src={photo}/>
                <div className='bodSubCol'>
                    <p className='bodName'>{name}</p>
                    <p className='bodPosition'>{title}</p>
                </div>
            </div>
        </>
    )
    }
);

export default BodTile;