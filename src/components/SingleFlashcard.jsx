import '../App.css'

function SingleFlashcard (props) {
    return (
        <div className = {`flashcard ${props.flipped ? "flipped" : ""}`} onClick = {() => props.setFlipped(!props.flipped)}>
            <div className = "flashcard-inner">
                <div className = "flashcard-front">
                    <h3>{props.description}</h3>
                </div>
                <div className = "flashcard-back">
                    <h3>{props.answer}</h3>
                </div>
            </div>
        </div>
    );
}

export default SingleFlashcard;