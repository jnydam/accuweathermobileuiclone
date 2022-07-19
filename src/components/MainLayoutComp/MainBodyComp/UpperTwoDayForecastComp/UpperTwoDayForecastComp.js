import React from 'react';
import InnerForecastContentComp from './InnerForecastContentComp/InnerForecastContentComp';

import styles from './UpperTwoDayForecastComp.module.css';

import biggerMoonWithCloudGraphic from '../../../../assets/biggermoonwithcloud.png';
import sunAndCloudGraphic from '../../../../assets/sunandcloud.png';
import moonWithCloudRightGraphic from '../../../../assets/moonwithcloud.png';

const UpperTwoDayForecastComp = (props) => {

    const dummyWeatherData = [
        {
            icon: biggerMoonWithCloudGraphic,
            upperDayText: 'TONIGHT',
            middleTempText: '60°',
            lowerRealFeelText: '62°'
        },
        {
            icon: sunAndCloudGraphic,
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
                        icon={dataObject.icon}
                        upperDayText={dataObject.upperDayText}
                        middleTempText={dataObject.middleTempText}
                        lowerRealFeelText={dataObject.lowerRealFeelText}></InnerForecastContentComp>
                </div>
            ))}
            <div className={styles.forecastColumnDividerLast}>
                <InnerForecastContentComp
                        icon={moonWithCloudRightGraphic}
                        upperDayText={lastItem.upperDayText}
                        middleTempText={lastItem.middleTempText}
                        lowerRealFeelText={lastItem.lowerRealFeelText}></InnerForecastContentComp>
            </div>
        </div>
    </div>)
}

export default UpperTwoDayForecastComp;