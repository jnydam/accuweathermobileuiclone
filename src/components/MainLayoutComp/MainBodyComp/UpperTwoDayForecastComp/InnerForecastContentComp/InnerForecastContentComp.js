import React from 'react';

import styles from './InnerForecastContentComp.module.css';

import biggerMoonWithCloudGraphic from '../../../../../assets/biggermoonwithcloud.png';

const InnerForecastContentComp = (props) => {

    return (<React.Fragment>
        <span style={{
            fontSize: '0.7rem',
            color: '#81c1f8',
            marginLeft: '1rem',
            marginBottom: '0.3rem'}}>{props.upperDayText}</span>
        <div style={{marginLeft: '1rem', marginBottom: '0.3rem'}} className={styles.iconDegreeContainer}>
            <img 
                className={styles.biggerMoonWithCloudStyle}
                src={biggerMoonWithCloudGraphic}></img>
            <span style={{fontSize: '1.8rem', marginLeft: '0.4rem'}}>{props.middleTempText}</span>
        </div>
        <span style={{
            fontSize: '0.7rem',
            marginLeft: '1rem'}}>
          RealFeel {props.lowerRealFeelText}
        </span>
    </React.Fragment>)
}

export default InnerForecastContentComp;