import Image from 'next/image'
import Link from 'next/link';
import {Button} from 'react-bootstrap';

import {PageSection} from '@Components/page-section/PageSection';
import {PageSectionHeading} from '@Components/page-section-heading/PageSectionHeading';

import styles from '@Styles/AppHeader.module.scss';
import LABELS from '@Strings';

function AppHeader(){
    const sectionClasses = {
        section: `${styles['animated-masterhead']}`,
        container: `text-white  pt-5 d-flex align-items-center justify-content-center flex-column`
    };

    const headingClasses = {
        text: `${styles['text-heading']} text-uppercase mb-0 mt-3`
    };

    return (
        <PageSection full Component='header' id='home' classes={sectionClasses}>
            <Image layout='intrinsic' width={256} height={256} src='/assets/svg/puzzle.svg' alt={LABELS.smartPartCallToAction} />
            <PageSectionHeading Component='h1' text={LABELS.smartPart} classes={headingClasses} dividerVariant='white'/>
            <p className={`${styles['text-subheading']} font-weight-light mb-0`}>
                {LABELS.digitalize} - {LABELS.automate} - {LABELS.evolve}
            </p>
            <Link href='#steps'>
                <Button variant='warning'
                    className='font-weight-bold text-secondary thover-secondary-l-80 mt-3 text-uppercase p-3'>
                    {LABELS.getFreeDemo}
                </Button>
            </Link>
        </PageSection>
        
    );
}

export {AppHeader};
