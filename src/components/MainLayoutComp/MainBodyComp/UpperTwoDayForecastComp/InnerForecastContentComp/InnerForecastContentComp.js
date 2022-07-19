import React from 'react';

import styles from './InnerForecastContentComp.module.css';

const InnerForecastContentComp = (props) => {

    return (<div className={styles.innerContentContainer}>
        <span style={{
            fontSize: '0.7rem',
            color: '#81c1f8',
            marginBottom: '0.3rem'}}>{props.upperDayText}</span>
        <div style={{ marginBottom: '0.3rem'}} className={styles.iconDegreeContainer}>
            <img 
                className={styles.biggerMoonWithCloudStyle}
                src={props.icon}></img>
            <span style={{fontSize: '1.8rem', marginLeft: '0.4rem'}}>{props.middleTempText}</span>
        </div>
        <span style={{
            fontSize: '0.7rem'}}>
          RealFeel {props.lowerRealFeelText}
        </span>
    </div>)
}

export default InnerForecastContentComp;