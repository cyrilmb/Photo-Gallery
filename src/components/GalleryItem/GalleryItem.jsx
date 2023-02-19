import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({ item, addLike }) {
    console.log(item.description);

    const handleLikeClick = () => {
        console.log('i like clicking like buttons');

        addLike(item);

    };

    return (
        <div className="gallery-item">
            <div className='row flip-box'>
                <div className='column flip-box-inner'>
                    <div className='flip-box-front'>
                        <img className='image' src={item.path} />
                    </div>
                    <div className="flip-box-back">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleLikeClick} className="button-like" role="button">How much like {item.likes}</button>
            </div>

        </div>
    );
}

export default GalleryItem;