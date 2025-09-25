import { useState } from 'react'
import './App.css'
import SingleFlashcard from './components/SingleFlashcard'

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const showNextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    setFlipped(false);
  }


  const cards = [
    { description: "What is the final score to shoot par on a course?", answer: "72"}, 
    { description: "What is the term for a score of three under par on a single hole?", answer: "Albatross" },
    { description: "What is the term for a score of two under par on a single hole?", answer: "Eagle" },
    { description: "What is the term for a score of one under par on a single hole?", answer: "Birdie" },
    { description: "What is the term for a score of one over par on a single hole?", answer: "Bogey" },
    { description: "What is the term for a score of two over par on a single hole?", answer: "Double Bogey" },
    { description: "What is the term for hitting the ball into the hole in one stroke from the tee box?", answer: "Hole-in-One" },
    { description: "What is the term for a shot that curves sharply to the right (for a right-handed golfer)?", answer: "Slice" },
    { description: "What is the term for a shot that curves sharply to the left (for a right-handed golfer)?", answer: "Hook" },
    { description: "What club do you use when you are closest to the green?", answer: "Putter" }
  ]


  return (
    <>
      <div className = "container">
        <div className = "header">
          <h1>Golf Flashcards!</h1>
          <h2>Learn some golf trivia today</h2>
          <h3>Total flashcards: 10</h3>
          <SingleFlashcard flipped = {flipped} setFlipped = {setFlipped} description = {cards[currentIndex].description} answer = {cards[currentIndex].answer}/>
        </div>
        <div className = "buttons">
          <button onClick = {showNextCard}>Next</button>
        </div>
      </div>
    </>
  )
}

export default App
