import { useState } from 'react'
import quotes from "./assets/quotes.json"
import { FaTwitter,FaQuoteLeft} from 'react-icons/fa';
import './App.css'

interface Quote{
  quote:string;
  author:string;
}

const getRandomQuote=(): Quote=>{
  return quotes[Math.floor(Math.random()* quotes.length)];
}
const getRandomColor =(): string=>{
  const red = Math.floor(Math.random()*128);
  const green = Math.floor(Math.random()*245);
  const blue = Math.floor(Math.random()*128);

  return `rgb(${red},${green},${blue})`;
}

const transition ="all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const [randomColor,setRandomColor] = useState<string>(getRandomColor());


  const changeQuote = ()=>{
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }
  return (
  <div className='background' style={{backgroundColor:randomColor ,transition}}>
    <div id="quote-box" style={{backgroundColor:'white',paddingTop:20}}>
      <div className="quote-content" style={{color:randomColor,transition}}>
        <div className='contQuote'>
          <FaQuoteLeft style={{minWidth:30,fontSize:30,paddingInline:20}}/>
          <h2 id="text">{quote.quote}</h2>
        </div>
        <h4 id="author" style={{color:randomColor,transition}}>- {quote.author}</h4>
      </div>
      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id='tweet-quote'><FaTwitter style={{color:randomColor,transition}}></FaTwitter></a>
        <button id='new-quote' onClick={changeQuote} style={{backgroundColor:randomColor,transition}}>Next</button>
      </div>
    </div>
  </div>);
}

export default App
