
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, addLike }) {


    return (

        galleryList.map((item, i) => (
            <GalleryItem addLike={addLike} item={item} key={i} />
        ))

    );
}

export default GalleryList;