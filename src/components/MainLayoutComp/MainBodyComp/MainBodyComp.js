import React from 'react';

import styles from './MainBodyComp.module.css';
import TodayDetailComp from './TodayDetailComp/TodayDetailComp';
import UpperTwoDayForecastComp from './UpperTwoDayForecastComp/UpperTwoDayForecastComp';
import UpperWeatherKeyComp from './UpperWeatherKeyComp/UpperWeatherKeyComp';
import CurrentConditionsComp from './CurrentConditionsComp/CurrentConditionsComp';

const MainBodyComp = (props) => {

    return (<div className={styles.mainBodyCompContainer}>
        <div className={styles.scrollableBodyContainer}>
            <UpperWeatherKeyComp></UpperWeatherKeyComp>
            <UpperTwoDayForecastComp></UpperTwoDayForecastComp>
            <TodayDetailComp></TodayDetailComp>
            <CurrentConditionsComp></CurrentConditionsComp>
        </div>
    </div>)
}

export default MainBodyComp;