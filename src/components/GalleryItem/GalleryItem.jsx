import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({ item, addLike }) {
    console.log(item.likes);

    const handleLikeClick = () => {
        console.log('i like clicking like buttons');

        addLike(item);

    };

    const [toggle, setToggle] = useState(false);

    let picOrText;

    if (toggle == true) {
        picOrText = <p className='textbox'> {item.description}</p>;
    } else if (toggle == false) {
        picOrText = <img className='image' src={item.path} alt={item.description} />;
    }

    console.log('Toggling!', toggle);
    const toggleClick = () => {
        console.log('Toggling!', toggle);

        setToggle(!toggle);


    };

    return (
        <>
            {console.log({ picOrText })}
            <div className='gallery-item'>
                <div className='image-box'>
                    <div onClick={toggleClick}>
                        {picOrText}
                    </div>
                </div>

                <div>
                    <button onClick={handleLikeClick} className="button-like" role="button">How much like {item.likes}</button>
                </div>

            </div>
        </>

    );
}

export default GalleryItem;