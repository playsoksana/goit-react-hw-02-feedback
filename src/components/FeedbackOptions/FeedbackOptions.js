import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    static preventDefault = {

    }
    state = {}

    addFeedback = (ev) => {
        const valueTarget = ev.target.textContent.toLowerCase();
        this.props.onLeaveFeedback(valueTarget);      
    }

    render() { 
        const {addFeedback} = this;
        return (
             <ul className={styles.List}>
                <li><button  className={styles.Item} onClick={addFeedback} type="button">Good</button></li>
                <li><button  className={styles.Item} onClick={addFeedback}  type="button">Neutral</button></li>
                <li><button  className={styles.Item} onClick={addFeedback}  type="button">Bad</button></li>                
            </ul>
          );
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}
 
export default FeedbackOptions;