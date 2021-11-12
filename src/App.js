import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import image from './chuck.png';

function App() {
  const url = 'https://api.chucknorris.io/jokes/';

  // function for getting quotes
  const getRandomQuote = (path) => {
    fetch(path)
      .then(res => res.json())
      .then(data => {
        setQuoteOnScreen(data.value)
      });
  };

  // get the initial quote
  const [quoteOnScreen, setQuoteOnScreen] = useState('');
  useEffect(() => {
    getRandomQuote(`${url}random`)
  }, []);

  // get the categories' names
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`${url}categories`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      });
  }, []);

  // render the categories buttons on the screen
  const showButtons = () => (
    categories.map(categ => (
      // knowing that the categories' names are in this case unique, I decided to put them as keys as well
      <li key={categ}><Category content={categ} onClick={handleClick} /></li>
    ))
  );

  // get random quote from a given category
  const handleClick = (content) => {
    getRandomQuote(`${url}random?category=${content}`)
  };

  return (
    <div className="App">
      <Header />
      <h1 className="App-title">Categories</h1>
      <ul className="buttons-container">
        {showButtons()}
        <Category content="random" onClick={() => getRandomQuote(url + 'random')} />
      </ul>
      <div className="quote-container">
        <p className="quote-on-screen">{quoteOnScreen}</p>
      </div>
      <img src={image} alt="a Chuck Norris image" className="chuck-image" />
    </div>
  );
}

export default App;