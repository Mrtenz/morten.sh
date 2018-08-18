import * as React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

const App: React.StatelessComponent = () => (
  <div className="app">
    <svg
      className="logo"
      xmlns="https://www.w3.org/2000/svg"
      version="1.1"
      width="300"
      height="300"
      viewBox="20 30 55 40"
    >
      <path
        className="triangle"
        fill="none"
        stroke="#fff"
        strokeWidth="0.1"
        strokeMiterlimit="10"
        d="M20,70 L30,70 L20,60 L20,70"
      />
      <path
        className="triangle"
        fill="none"
        stroke="#fff"
        strokeWidth="0.1"
        strokeMiterlimit="10"
        d="M75,70 L65,70 L75,60 L75,70"
      />
      <path
        className="letter"
        fill="none"
        stroke="#fff"
        strokeWidth="0.1"
        strokeMiterlimit="10"
        d="M47.5,67.5 L50,70 L60,70 L75,55 L75,45 L55,65 L52.5,62.5 L75,40 L75,30 L47.5,57.5"
      />
      <path
        className="letter"
        fill="none"
        stroke="#fff"
        strokeWidth="0.1"
        strokeMiterlimit="10"
        d="M47.5,67.5 L45,70 L35,70 L20,55 L20,45 L40,65 L42.5,62.5 L20,40 L20,30 L47.5,57.5"
      />
      <path
        id="shadow"
        fill="none"
        d="M45,70 L47.5,67.5 L42.5,62.5 L40,65 L45,70
                     M52.5,62.5 L55,60 L50,55 L47.5,57.5 L52.5,62.5
                     M60,70 62.5,67.5 L57.5,62.5 L55,65 L60,70"
      />
    </svg>

    <div className="social">
      <a href="https://github.com/Mrtenz" target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href="mailto:maarten@zuidhoorn.com" rel="noopener noreferrer">
        Email
      </a>
    </div>
  </div>
);

export default hot(module)(App);
