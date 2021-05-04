import React from 'react';
import styles from '@Styles/PageSectionHeading.module.scss';

function PageSectionHeading({text, Component, classes, dividerVariant}){
    return (
        <React.Fragment>
            <Component className={`${styles['section-heading']} text-center text-uppercase mt-5 ${classes.text}`}>{text}</Component>
            <div className={styles['divider']}>
                <div className={`${styles['divider-line']} bg-${dividerVariant}`}></div>
                {/*TODO Replace this with FontAwesome Icon <div className="divider-custom-icon"><i className="fas fa-star"></i></div> */}
                <div className={`${styles['divider-line']} bg-${dividerVariant}`}></div>
            </div>
        </React.Fragment>
        
    );
}

PageSectionHeading.defaultProps = {
    classes: {
        text: "",
        divider: ""
    },
    Component: 'h2',
    dividerVariant: 'secondary'
};

export default PageSectionHeading;