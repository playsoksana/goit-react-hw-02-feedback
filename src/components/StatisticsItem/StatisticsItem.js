import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

const StatisticsItem = ({label, value, symbol}) => {

   return <li className={styles.Item}>
   {label} <p className={styles.Value}>{value} {symbol}</p>               
    </li>;
}
    
StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    symbol: PropTypes.string,
       value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),

}

StatisticsItem.defaultProps = {
    symbol: ''
}

export default StatisticsItem;