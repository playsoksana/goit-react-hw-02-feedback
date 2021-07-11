import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css'

const Section = ({ children, title }) =>
<section className={styles.Section}>   
    <h2 className={styles.Title}>{ title}</h2>
    {children}    
</section>;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

Section.defaultProps = {
    children: ' '
}
export default Section;