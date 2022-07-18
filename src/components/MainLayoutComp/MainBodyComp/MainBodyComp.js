import React from 'react';

import styles from './MainBodyComp.module.css';
import TodayDetailComp from './TodayDetailComp/TodayDetailComp';
import UpperTwoDayForecastComp from './UpperTwoDayForecastComp/UpperTwoDayForecastComp';
import UpperWeatherKeyComp from './UpperWeatherKeyComp/UpperWeatherKeyComp';

const MainBodyComp = (props) => {

    return (<div className={styles.mainBodyCompContainer}>
        <UpperWeatherKeyComp></UpperWeatherKeyComp>
        <UpperTwoDayForecastComp></UpperTwoDayForecastComp>
        <TodayDetailComp></TodayDetailComp>
    </div>)
}

export default MainBodyComp;