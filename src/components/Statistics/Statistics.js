import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';



const Statistics = ({title, good, neutral, bad, total, positivePercent}) => {  
        return (
            <>
             <h2>{ title}</h2> 
            <ul>
            <StatisticsItem label='good:' value={good}/>
            <StatisticsItem label='neutral:' value={neutral}/>
            <StatisticsItem label='bad:' value={bad}/>
            <StatisticsItem label='total:' value={total}/>
            <StatisticsItem label='positivePercent:' value={positivePercent} symbol='%'/>
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

