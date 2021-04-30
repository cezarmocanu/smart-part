import Image from 'next/image'
import {Button} from 'react-bootstrap';
import LABELS from '@Strings';

function AppHeader(){
    return (
        <header id="home" className="masthead section bg-primary text-white text-center">
            <div className="container d-flex align-items-center justify-content-center flex-column">
                <Image layout="intrinsic" width={256} height={256} src="/assets/svg/ux.svg" alt={LABELS.smartPartCallToAction} />
                <h1 className="masthead-heading text-uppercase mb-0">{LABELS.smartPart}</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">{LABELS.digitalize} - {LABELS.automate} - {LABELS.evolve}</p>
                <a href="#steps"><Button className="mt-3 text-uppercase p-3" variant="warning">{LABELS.getFreeDemo}</Button></a>
            </div>
        </header>
    );
}

export {AppHeader};
