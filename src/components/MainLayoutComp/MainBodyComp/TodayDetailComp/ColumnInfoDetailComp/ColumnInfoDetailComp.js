import React from 'react';

import styles from './ColumnInfoDetailComp.module.css';
import MoonSunHeadingComp from './MoonSunHeadingComp/MoonSunHeadingComp';
import RiseSetHorizRowComp from './RiseSetHorizRowComp/RiseSetHorizRowComp';

const ColumnInfoDetailComp = (props) => {

    return (<div className={styles.columnInfoDetailCompContainer}>
        <MoonSunHeadingComp
            icon={props.icon}
            hourText={props.hourText}
            minuteText={props.minuteText}></MoonSunHeadingComp>
        <RiseSetHorizRowComp
            riseTime={props.riseTime}></RiseSetHorizRowComp>
        <RiseSetHorizRowComp
            noBorder
            setTime={props.setTime}></RiseSetHorizRowComp>
    </div>)
}

export default ColumnInfoDetailComp;