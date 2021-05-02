import Image from 'next/image'
import {Button} from 'react-bootstrap';
import LABELS from '@Strings';
import styles from '@Styles/AppHeader.module.scss';

function AppHeader(){
    return (
        <header id="home" className={`masthead app-container d-flex text-white text-center ${styles['animated-masterhead']}`}>
            <div className="container d-flex align-items-center justify-content-center flex-column">
                <Image layout="intrinsic" width={256} height={256} src="/assets/svg/puzzle.svg" alt={LABELS.smartPartCallToAction} />
                <h1 className={`${styles['text-heading']} text-uppercase mb-0 mt-3`}>{LABELS.smartPart}</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className={`${styles['text-subheading']} font-weight-light mb-0`}>{LABELS.digitalize} - {LABELS.automate} - {LABELS.evolve}</p>
                <a href="#steps">
                    <Button variant="warning"
                        className="font-weight-bold text-secondary thover-secondary-l-80 mt-3 text-uppercase p-3">
                        {LABELS.getFreeDemo}
                    </Button>
                </a>
            </div>
        </header>
    );
}

export {AppHeader};
