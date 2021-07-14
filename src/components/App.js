import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import styles from './App.module.css';



 class App extends Component {
     state = {
        good: 0,
        neutral: 0,
        bad: 0
     }

     increment = (value) => {         
        this.setState(currentValue => ({
            [value]: currentValue[value] + 1,
    }));
     };

     total = () => {
         const {good, neutral, bad} = this.state;
         return good + neutral + bad
     };

     positivePercent = () =>
      (this.state.good / this.total() * 100).toFixed(0);
     
     
     render() {
        const {increment, total, positivePercent} = this;
        const {good, neutral, bad} = this.state;
               
            return (
                <div>
            <h1>Task #1 , HomeWork 2</h1>
            <Section title="Please leave feedback">                
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={increment}/>
            </Section>
            <Section title="Statistics">

            {total() < 1 
            ? <p className={styles.Message}>No feedback given</p> 
            :  <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={total()}
                positivePercent={positivePercent()} />}   
            </Section>  
        </div> );
    }
 }
  
 export default App;

