import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';



const Statistics = ({title, good, neutral, bad, total, positivePercent}) => {  

        return (
            <>
             <h2>{ title}</h2> 
            <ul>
                <li className={style.Item}>
                   Good: <p className={style.Value}>{good}</p>
                </li>
                <li className={style.Item}>
                    Neutral: <p className={style.Value}>{neutral}</p>
                </li>
                <li className={style.Item}>
                    Bad: <p className={style.Value}>{bad}</p>
                </li>
                <li className={style.Item}>
                    Total: <p className={style.Value}>{total}</p>
                </li>
                <li className={style.Item}>
                    Positive feedback: <p className={style.Value}>{positivePercent}%</p>
                </li>
            </ul>
             </>
         );
    
}

Statistics.propTypes = {
    title: PropTypes.string,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercent: PropTypes.string
}

 
export default Statistics;

