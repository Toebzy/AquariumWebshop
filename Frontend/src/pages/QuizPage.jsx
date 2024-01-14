import { useState } from 'react';
import { fishQuiz } from '../assets/questions';
import Product from "../components/Product";

const Quiz = () => {
  const [showResult, setShowResult] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
  });
  const fishData = [
    { id: 1, name: 'Moon Jellyfish', text: '(Aurelia aurita)', price: '$20', image: 'https://www.eopugetsound.org/sites/default/files/styles/magazinewidth_592px/public/topical_article/images/moon_jellyfish.jpg?itok=Esreg6zX'},
    { id: 2, name: 'Garryfish', text: '(Garryfish)', price: '$4', image: 'src/assets/images/garryfish.jpg' },
    { id: 3, name: 'Royal Gramma', text: '(Gramma loreto)', price: '$25', image: 'https://freakincorals.com/cdn/shop/products/lg_72329_Royal_Gramma_Basslet_576x.jpg?v=1601919573' },
    { id: 4, name: 'Fire Blood Shrimp', text: '(Lysmata debelius)', price: '$65', image: 'https://www.oceanaquarium.com/wp-content/uploads/2012/12/35_fire_shrimp.jpg' },
  ];

  const { questions } = fishQuiz;
  const { question, choices } = questions[activeQuestion];

  const onClickNext = () => {
    if (selectedAnswerIndex !== null) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + selectedAnswerIndex,
      }));

      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else {
        setShowResult(true);
      }

      setSelectedAnswerIndex(null);
    }
  };

  const onAnswerSelected = (index) => {
    setSelectedAnswerIndex(index);
  };

  const renderProducts = (filteredFishData) => {
    return (
      <div className="content">
        {filteredFishData.map((filteredFish) => (
          <Product
            key={filteredFish.id}
            productId={filteredFish.id}
            productName={filteredFish.name}
            productText={filteredFish.text}
            productPrice={filteredFish.price}
            productImage={filteredFish.image}
          />
        ))}
      </div>
    );
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="content">
          <h3>Result</h3>
          <p>
            Total Score:<span> {result.score}</span>
            
          </p>
          {result.score >= 25 && (
            <>
              <p>Products for Experienced Fishkeepers:</p>
              {renderProducts(fishData.filter((fish) => fish.id === 4))}
            </>
          )}
          {result.score >= 15 && result.score < 25 && (
            <>
              <p>Products for Intermediate Fishkeepers:</p>
              {renderProducts(fishData.filter((fish) => fish.id === 3))}
            </>
          )}
          {result.score < 15 && result.score > 0 && (
            <>
              <p>Products for Beginner Fishkeepers:</p>
              {renderProducts(fishData.filter((fish) => fish.id === 2))}
            </>
          )}
          {result.score === 0 && (
            <>
              <p>Just as spineless and indecisive as you:</p>
              {renderProducts(fishData.filter((fish) => fish.id === 1))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;