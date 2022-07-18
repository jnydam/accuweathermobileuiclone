import React from 'react';
import ColumnInfoDetailComp from './ColumnInfoDetailComp/ColumnInfoDetailComp';

import styles from './TodayDetailComp.module.css';

import sunImageGraphic from '../../../../assets/emptysun.png';
import moonImageGraphic from '../../../../assets/emptycrescent.png';

const TodayDetailComp = (props) => {

    const todayDetailDummyInformation = [
        {
            icon: sunImageGraphic,
            hourText: 15,
            minuteText: 14,
            riseTime: '5:13 AM',
            setTime: '8:27 PM'
        },
        {
            icon: moonImageGraphic,
            hourText: 12,
            minuteText: 4,
            riseTime: '12:31 PM',
            setTime: '12:35 AM'   
        }
    ];


    return (<div className={styles.todayDetailCompContainer}>
        <div className={styles.todayDetailHeaderContainer}>
            <span>Today's Details</span>
        </div>
        <div className={styles.outerColumnBlockContainer}>
            {todayDetailDummyInformation.map((infoElement, index) => (
                <ColumnInfoDetailComp
                    key={index}
                    icon={infoElement.icon}
                    hourText={infoElement.hourText}
                    minuteText={infoElement.minuteText}
                    riseTime={infoElement.riseTime}
                    setTime={infoElement.setTime}></ColumnInfoDetailComp>
            ))}
        </div>
    </div>)
}

export default TodayDetailComp;