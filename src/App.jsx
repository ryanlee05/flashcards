import { useState } from 'react'
import './App.css'
import SingleFlashcard from './components/SingleFlashcard'

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const [leftEnd, setLeftEnd] = useState(true);
  const [rightEnd, setRightEnd] = useState(false);

  const [userAnswer, setUserAnswer] = useState("");

  const [background, setBackground] = useState("white");

  const compareAnswers = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === cards[currentIndex].answer.toLowerCase()) {
      setBackground("right");
    }
    else {
      setBackground("wrong");
      setUserAnswer("");
    }
  }

  const shuffleCards = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length -1; i >0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const holder = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = holder;
    }
    setCards(shuffled);
    setCurrentIndex(0);
    setLeftEnd(true);
    setRightEnd(false);
    return shuffled;
  }

  const showLeftCard = () => {
    setBackground("white");
    setUserAnswer("");
    //check if the next card is the beginning of the array
    if (currentIndex -1 === 0) {
      //if it is, set the index to the beginning and set leftend to true
      setCurrentIndex(prevIndex => prevIndex - 1);
      setLeftEnd(true); 
      setFlipped(false);
    }
    //check if the current index is not the beginning of the array
    else if (currentIndex -1 !== -1) {
      //if it is not, decrement the index by 1 and set leftend to false
      setCurrentIndex(prevIndex => prevIndex - 1);
      setFlipped(false);
      setLeftEnd(false);
      setRightEnd(false);
    }
    //if the current index is the beginning of the array, set leftend to true
    else {
      setLeftEnd(true);
    }
  }

  const showRightCard = () => {
    setBackground("white");
    setUserAnswer("");
    if (currentIndex + 1 === cards.length -1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setRightEnd(true);
      setFlipped(false);
    }
    else if (currentIndex + 1 !== cards.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setRightEnd(false);
      setFlipped(false);
      setLeftEnd(false);
    }
    else {
      setRightEnd(true);
    }
  }


  const [cards, setCards] = useState([
    { description: "What is the final score to shoot par on a course?", answer: "72"}, 
    { description: "What is the term for a score of three under par on a single hole?", answer: "Albatross" },
    { description: "What is the term for a score of two under par on a single hole?", answer: "Eagle" },
    { description: "What is the term for a score of one under par on a single hole?", answer: "Birdie" },
    { description: "What is the term for a score of one over par on a single hole?", answer: "Bogey" },
    { description: "What is the term for a score of two over par on a single hole?", answer: "Double Bogey" },
    { description: "What is the term for hitting the ball into the hole in one stroke from the tee box?", answer: "Hole In One" },
    { description: "What is the term for a shot that curves sharply to the right (for a right-handed golfer)?", answer: "Slice" },
    { description: "What is the term for a shot that curves sharply to the left (for a right-handed golfer)?", answer: "Hook" },
    { description: "What club do you use when you are closest to the green?", answer: "Putter" }
  ]);




  return (
    <>
      <div className = "container">
        <div className = "header">
          <h1>Golf Flashcards!</h1>
          <h2>Learn some golf trivia today</h2>
          <h3>Total flashcards: 10</h3>
          <SingleFlashcard flipped = {flipped} setFlipped = {setFlipped} description = {cards[currentIndex].description} answer = {cards[currentIndex].answer}/>
        </div>
        <div className = "form">
          <p>Guess the answer here: </p>
          <form onSubmit = {compareAnswers}>
            <input  className = {background}
            type = "text"
            value = {userAnswer}
            onChange = {(e) => setUserAnswer(e.target.value)}
            />
          </form>
          <button onClick = {compareAnswers}>Submit</button>
        </div>
        <div className = "buttons">
          <button className = {`button ${leftEnd ? "blur" : ""}`} onClick = {showLeftCard}>Left</button>
          <button className = {`button ${rightEnd ? "blur" : ""}`} onClick = {showRightCard}>Right</button>
          <button onClick = {shuffleCards} >Shuffle Ca  rds</button>
        </div>
      </div>
    </>
  )
}

export default App
