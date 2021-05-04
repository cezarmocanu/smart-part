import {Col, Row} from 'react-bootstrap';
import {ServiceCard} from '@Components/service-card/ServiceCard';
import ContactForm from '@Components/contact-form/ContactForm';
import {AppNavbar} from '@Components/navbar/Navbar';
import {AppHeader} from '@Components/header/Header';
import {PageSection} from '@Components/page-section/PageSection';
import {PageSectionHeading} from '@Components/page-section-heading/PageSectionHeading';

import LABELS from '@Strings';

export default function Home() {
  return (
    <div className='app'>      
        <AppNavbar />
        <AppHeader />
        <PageSection id='services'>
            <PageSectionHeading text={LABELS.services}/>
            <Row className='justify-content-center'>
                <Col md={6} lg={4} className='mb-5' key='prototype-col'>
                    <ServiceCard
                        title={LABELS.planAndAnalyze}
                        text={LABELS.planAndAnalyzeDescription}
                        img={'/assets/svg/prototype.svg'}
                        imgAlt={LABELS.planAndAnalyzeDescription}
                    />
                </Col>

                <Col md={6} lg={4} className='mb-5'  key='ux-col'>
                    <ServiceCard
                        title={LABELS.feedbackBasedSolution}
                        text={LABELS.feedbackBasedSolutionDescription}
                        img={'/assets/svg/ux.svg'}
                        imgAlt={LABELS.feedbackBasedSolutionDescription}
                    />
                </Col>

                <Col md={6} lg={4} className='mb-5' key='cm-key'>
                    <ServiceCard
                        title={LABELS.forgetPapers}
                        text={LABELS.forgetPapersDescription}
                        img={'/assets/svg/content-management.svg'}
                        imgAlt={LABELS.forgetPapersDescription}
                    />
                </Col>
                
                <Col md={6} lg={4} className='mb-5' key='cs-key'>
                    <ServiceCard
                        title={LABELS.weAreHereToHelp}
                        text={LABELS.weAreHereToHelpDescription}
                        img={'/assets/svg/customer-service.svg'}
                        imgAlt={LABELS.weAreHereToHelpDescription}
                    />
                </Col>

                <Col md={6} lg={4} className='mb-5' key='location-key'>
                    <ServiceCard
                        title={LABELS.getYourBussinessOnline}
                        text={LABELS.getYourBussinessOnlineDescription}
                        img={'/assets/svg/location.svg'}
                        imgAlt={LABELS.getYourBussinessOnlineDescription}
                    />
                </Col>
            </Row>
        </PageSection>
        
        
        <PageSection id='about' classes={{section: 'bg-primary text-white'}}>
            <PageSectionHeading text={LABELS.about} dividerVariant='white' />
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <p className='lead'>{LABELS.aboutDescription}</p>
                </Col>
            </Row>
        </PageSection>

        <PageSection id='steps'>
            <PageSectionHeading text={LABELS.freeDemo}/>
            
            <Row className='justify-content-center'>
                <Col md={6} lg={4} className='mb-5' key='contact-us-key'>
                    <ServiceCard
                        title={'Contactează-ne!'}
                        text={'Printr-un email la smartpartinfo@gmail.com sau completează formularul de mai jos și te contactăm noi.'}
                        img={'/assets/svg/1.svg'}
                        imgAlt={'Printr-un email la smartpartinfo@gmail.com sau completează formularul de mai jos și te contactăm noi.'}
                    />
                </Col>

                <Col md={6} lg={4} className='mb-5' key='analisis-key'>
                    <ServiceCard
                        title={'Analiză de bază'}
                        text={'Organizăm o întalnire, analizăm procesele din compania ta, și discutăm idei preliminare'}
                        img={'/assets/svg/2.svg'}
                        imgAlt={'Organizăm o întalnire, analizăm procesele din compania ta, și discutăm idei preliminare'}
                    />
                </Col>

                <Col md={6} lg={4} className='mb-5' key='show-demo-key'>
                    <ServiceCard
                        title={'Prezentare demo'}
                        text={'În decurs de 30 de zile, revenim cu o aplicație demonstrativa gratuită, și stabilim o posbila colaborare.'}
                        img={'/assets/svg/3.svg'}
                        imgAlt={'În decurs de 30 de zile, revenim cu o aplicație demonstrativa gratuită, și stabilim o posbila colaborare.'}
                    />
                </Col>
            </Row>
        </PageSection>

        <hr/>

        <PageSection id='contact'>
            <PageSectionHeading text={LABELS.contact}/>
            <Row>
                <Col lg={6} className='mx-auto'>
                    <ContactForm/>
                </Col>
            </Row>
        </PageSection>
        
        <footer className='footer text-center'>
            <div className='container'>
                <div className='row'>
                    
                    <div className='col-lg-4 mb-5 mb-lg-0'>
                        <h4 className='text-uppercase mb-4'>Locație</h4>
                        <p className='lead mb-0'>
                            <br />
                            Brașov, România
                        </p>
                    </div>
                    
                    <div className='col-lg-4 mb-5 mb-lg-0'>
                        <h4 className='text-uppercase mb-4'>Social Media</h4>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-facebook-f'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-linkedin-in'></i></a>
                        <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-instagram'></i></a>
                    </div>
                    
                    <div className='col-lg-4'>
                        <h4 className='text-uppercase mb-4'>Despre SmartPart</h4>
                        <p className='lead mb-0'>
                            Smart Part reprezinta o echipă de programatori entuziaști ce doresc sa ofere soluții digitale companiilor din România.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className='copyright py-4 text-center text-white'>
            <div className='container'>
                <small>
                    Copyright &copy; SmartPart {new Date().getFullYear()}
                </small>
            </div>
        </div>
    </div>
  )
};
