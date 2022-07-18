import React from 'react';
import CircleKeyComp from './CircleKeyComp/CircleKeyComp';

const UpperWeatherKeyComp = (props) => {

    return (<div className={styles.dynamicSunDisplayCompContainer}>
        <div className={styles.categoryKeyContainer}>
            <span>Rain</span>
            <CircleKeyComp></CircleKeyComp>
            <CircleKeyComp></CircleKeyComp>
            <CircleKeyComp></CircleKeyComp>
            <CircleKeyComp></CircleKeyComp>
        </div>
        <div className={styles.categoryKeyContainer}>

        </div>
        <div className={styles.categoryKeyContainer}>

        </div>
        <div className={styles.categoryKeyContainer}>

        </div>
    </div>
    )
};

export default UpperWeatherKeyComp;