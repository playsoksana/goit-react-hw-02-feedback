import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    state = {}

    addFeedback = (ev) => {
        const valueTarget = ev.target.textContent.toLowerCase();
        this.props.onLeaveFeedback(valueTarget);      
    }

    render() { 
        const {addFeedback} = this;
        return (
          <ul>    
            {this.props.options.map((el, index)=>
                <li key={index}><button  className={styles.Item} onClick={addFeedback} type="button">{el}</button></li>
            )}
            </ul>
          );
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}
 
export default FeedbackOptions;