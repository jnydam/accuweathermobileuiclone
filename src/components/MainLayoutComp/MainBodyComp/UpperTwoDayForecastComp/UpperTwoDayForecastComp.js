import React from 'react';
import InnerForecastContentComp from './InnerForecastContentComp/InnerForecastContentComp';

import styles from './UpperTwoDayForecastComp.module.css';

const UpperTwoDayForecastComp = (props) => {

    const dummyWeatherData = [
        {
            upperDayText: 'TONIGHT',
            middleTempText: '60°',
            lowerRealFeelText: '62°'
        },
        {
            upperDayText: 'THU',
            middleTempText: '79°',
            lowerRealFeelText: '87°'
        }
    ];

    const lastItem = {
            upperDayText: 'THU NIGHT',
            middleTempText: '63°',
            lowerRealFeelText: '64°' 
    };


    return (<div className={styles.upperTwoDayForecastCompContainer}>
        <div className={styles.innerForecastRowContainer}>
            {dummyWeatherData.map((dataObject, index) => (
                <div className={styles.forecastColumnDivider}>
                    <InnerForecastContentComp
                        key={index}
                        upperDayText={dataObject.upperDayText}
                        middleTempText={dataObject.middleTempText}
                        lowerRealFeelText={dataObject.lowerRealFeelText}></InnerForecastContentComp>
                </div>
            ))}
            <div className={styles.forecastColumnDividerLast}>
                <InnerForecastContentComp
                        upperDayText={lastItem.upperDayText}
                        middleTempText={lastItem.middleTempText}
                        lowerRealFeelText={lastItem.lowerRealFeelText}></InnerForecastContentComp>
            </div>
        </div>
    </div>)
}

export default UpperTwoDayForecastComp;