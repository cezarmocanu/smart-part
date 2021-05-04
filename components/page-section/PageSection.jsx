import {Container} from 'react-bootstrap';
import styles from '@Styles/PageSection.module.scss';

function PageSection({Component, id, classes, children, full}){

    return (
        <Component id={id}
            className={`
                ${styles['section']}
                ${full && styles['full']}
                ${classes.section}`}>
            <Container className={classes.container}>
                {children}
            </Container>
        </Component>
    );
}

PageSection.defaultProps = {
    classes:{
        section: "",
        container: ""
    },
    Component: 'section'
};

export {PageSection};