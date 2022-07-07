import React from 'react';
import MainBodyComp from './MainBodyComp/MainBodyComp';
import UpperNavBar from './UpperNavBar/UpperNavBar';

import styles from './MainLayoutComp.module.css';

const MainLayoutComp = (props) => {

    return (<div className={styles.mainLayoutCompContainer}>
        <UpperNavBar></UpperNavBar>
        <MainBodyComp></MainBodyComp>
    </div>)
}

export default MainLayoutComp;