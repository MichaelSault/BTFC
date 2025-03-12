import { forwardRef } from 'react';
import '../styles/bod.css';


// eslint-disable-next-line react/display-name
const BodTileRight = forwardRef(
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
            <div className='bodTileRight'>
                <div className='bodSubCol'>
                    <p className='bodName'>{name}</p>
                    <p className='bodPosition'>{title}</p>
                </div>
                <img className="bodPhoto" src={photo}/>
            </div>
        </>
    )
    }
);

export default BodTileRight;