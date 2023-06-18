import React, { useState } from 'react';


function App() {
  const [memeUrl, setMemeUrl] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');


    const generateMeme = () => {
    const apiKey = 'UCJxF5HIGQZ5NPACd5nUW1nHiV0rymUd';
  
    // Construct the API request to generate a meme
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${encodeURIComponent(
        topText + ' ' + bottomText
      )}`;
      
      // Fetch data from GIPHY API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Rest of the code
          if (data && data.data && data.data.url) {


            const memeUrl = data.data.url;


            setMemeUrl(memeUrl);
        } 
        
        else {
          console.error('Error generating meme:', data);
        }
      
        })
        .catch((error) => {
          console.error('Error generating meme:', error);
      });
  };
  



  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <div className="form-group">
        <label htmlFor="topText">Top Text:</label>
        <input
          type="text"
          id="topText"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bottomText">Bottom Text:</label>
        <input
          type="text"
          id="bottomText"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <button onClick={generateMeme} className="btn btn-primary">
        Generate Meme
      </button>
      {memeUrl && <img src={memeUrl} alt="Generated Meme" />}
    </div>
  );
 }
export default App;
