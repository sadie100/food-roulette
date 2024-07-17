import React, { useState } from "react";

const AnimatedTeardrop: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Animation duration
  };

  return (
    <div className="container">
      <div className={`teardrop ${isAnimating ? "animate" : ""}`}></div>
      <button onClick={startAnimation}>Animate</button>
    </div>
  );
};

const styles = `
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f3f4f6;
  }

  .teardrop {
    width: 40px;
    height: 100px;
    background-color: black;
    border-radius: 20px 20px 2px 2px;
    position: relative;
    transform-origin: top center;
  }

  .teardrop::before {
    content: '';
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 40px solid black;
  }

  .teardrop::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 0 0 2px 2px;
  }

  .teardrop.animate {
    animation: rotateTeardrop 1s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  @keyframes rotateTeardrop {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  button {
    margin-top: 60px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
`;

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <AnimatedTeardrop />
    </>
  );
}
