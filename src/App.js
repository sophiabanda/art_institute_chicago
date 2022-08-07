import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App() {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.artic.edu/api/v1/artworks`)
      .then((response) => {
        console.log(response) //this is how we found data.data
        setArtWorks(response.data.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })

  }, []) //useEffect only going to run once, to get artWorks. Need empty array or will execute infinite loop
  return (
    <div className="App">
      <h1>Sophia's Page</h1>
      {loading && <p>Loading, please wait.</p>}

      {
        artWorks
          .filter(artWork => {
            if (artWork.image_id) {
              return artWork
            }
          })
          .map(artWork => {
            return (
              <div key={artWork.id}>
                <h1>{artWork.artist_title}</h1>
                <img src={`https://www.artic.edu/iiif/2/${artWork.image_id}/full/843,/0/default.jpg`} alt={artWork.title}></img>
              </div>
            ) //used string interpolation to rebuild URL to provide images
          })
      }
    </div>
  );
}

export default App;
