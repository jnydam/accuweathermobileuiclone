import React from 'react';

import styles from './UpperNavBar.module.css';

import sideBarGraphic from '../../../assets/sidebaricon.png';
import downArrowGraphic from '../../../assets/downarrow.png';

const UpperNavBar = (props) => {

    return (<div className={styles.upperNavBarContainer}>
        <div style={{justifyContent: 'flex-start'}} className={styles.tripleElementContainer}>
            <img style={{height: '3rem'}} src={sideBarGraphic}>
            </img>
        </div>
        <div className={styles.tripleElementContainer}>
            <div className={styles.locationHeaderContainer}>
                <span style={{color: 'white', fontWeight: 'bold'}}>Manchester, NH</span>
                <img 
                    style={{height: '1rem'}}
                    src={downArrowGraphic}></img>
            </div>
        </div>
        <div className={styles.tripleElementContainer}>
            <button className={styles.premiumButtonStyle}> 
                <span>GET PREMIUM+</span>
            </button>
        </div>
    </div>)
}

export default UpperNavBar;