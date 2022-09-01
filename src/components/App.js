import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from './Heading';
import InputQuery from './InputQuery';
import Subheading from './Subheading';
import SubmitButton from './SubmitButton';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <Subheading />
      <SubmitButton />
    </div>
  )
}

export default App;

