import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  const getGallery = () => {


    axios.get('/gallery')
      .then((response) => {
        console.log('in GET /gallery', response);
        setGalleryList(response.data);
      }).catch((err) => {
        console.error('GET error', err);
      });


  };

  useEffect(() => {
    getGallery();
  }, []);

  const addLike = (item) => {
    axios.put(`/gallery/like/${item.id}`, item.likes)
      .then((response) => {
        console.log('in PUT', response);
        getGallery();
      }).catch((err) => {
        console.error('PUT error', err);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>

      <div className="gallery-list">
        <GalleryList galleryList={galleryList} addLike={addLike} />
      </div>

    </div>
  );
}

export default App;
