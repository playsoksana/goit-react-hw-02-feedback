import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


const FeedbackOptions =({options, onLeaveFeedback}) => {
        return (
          <ul>    
            {options.map((el, index)=>
                <li key={index}>
                <button  className={styles.Item} 
                onClick={onLeaveFeedback} 
                type="button">{el}</button></li>
            )}
            </ul>
          );
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
      onLeaveFeedback: PropTypes.func.isRequired
  }
 
export default FeedbackOptions;