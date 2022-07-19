import React from 'react';

import styles from './LowerTabComp.module.css';

import dailyTabGraphic from '../../../assets/dailytabicon.png';
import todayTabGraphic from '../../../assets/todaytabicon.png';
import hourlyTabGraphic from '../../../assets/hourlytabicon.png';
import radarTabGraphic from '../../../assets/radartabicon.png';

const LowerTabComp = (props) => {

    return (<div className={styles.lowerTabCompContainer}>
        <div className={styles.tabDivider}>
            <img className={styles.tabIconStyle} src={todayTabGraphic}>
            </img>
            <span className={styles.tabTextStyle}>Today</span>
        </div>
        <div className={styles.tabDivider}>
             <img className={styles.tabIconStyle} src={hourlyTabGraphic}>
            </img>
            <span className={styles.tabTextStyle}>Hourly</span>
        </div>
        <div className={styles.tabDivider}>
            <img className={styles.tabIconStyle} src={dailyTabGraphic}>
            </img>
            <span className={styles.tabTextStyle}>Daily</span>
        </div>
        <div className={styles.tabDivider}>
            <img className={styles.tabIconStyle} src={radarTabGraphic}>
            </img>
            <span className={styles.tabTextStyle}>Radar</span>
        </div>
    </div>)
}

export default LowerTabComp;