import React from 'react';
import CircleKeyComp from './CircleKeyComp/CircleKeyComp';

import styles from './UpperWeatherKeyComp.module.css';


const UpperWeatherKeyComp = (props) => {

    return (<div className={styles.upperWeatherKeyCompContainer}>
        <div className={styles.categoryKeyContainer}>
            <span className={styles.weatherLabelStyle}>Rain</span>
            <CircleKeyComp
                color="#9dc43c"></CircleKeyComp>
            <CircleKeyComp
                color="#f7d648"></CircleKeyComp>
            <CircleKeyComp
                color="#de5e2d"></CircleKeyComp>
            <CircleKeyComp
                color="#cb3823"></CircleKeyComp>
        </div>
        <div className={styles.categoryKeyContainer}>
            <span className={styles.weatherLabelStyle}>Snow</span>
            <CircleKeyComp
                color="#a6c7ed"></CircleKeyComp>
            <CircleKeyComp
                color="#2a8eda"></CircleKeyComp>
            <CircleKeyComp
                color="#154aec"></CircleKeyComp>
            <CircleKeyComp
                color="#154aec"></CircleKeyComp>
        </div>
        <div className={styles.categoryKeyContainer}>
            <span className={styles.weatherLabelStyle}>Ice</span>
            <CircleKeyComp
                color="#dba8c5"></CircleKeyComp>
            <CircleKeyComp
                color="#c35a9d"></CircleKeyComp>
            <CircleKeyComp
                color="#a72e8c"></CircleKeyComp>
            <CircleKeyComp
                color="#6f226b"></CircleKeyComp>
        </div>
        <div className={styles.categoryKeyContainer}>
            <span className={styles.weatherLabelStyle}>Mix</span>
            <CircleKeyComp
                color="#b999e0"></CircleKeyComp>
            <CircleKeyComp
                color="#a375de"></CircleKeyComp>
            <CircleKeyComp
                color="#8a31d6"></CircleKeyComp>
            <CircleKeyComp
                color="#6400b9"></CircleKeyComp>
        </div>
    </div>
    )
};


export default UpperWeatherKeyComp;