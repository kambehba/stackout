import React from 'react';
import logo from './logo.svg';
import { withAuthenticator } from "aws-amplify-react";
import { API, graphqlOperation } from "aws-amplify";
import './App.css';

function App() {
  return (
    <div>
      
    </div>
  );
}

export default  withAuthenticator(App, { includeGreetings: true });
