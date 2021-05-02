import Head from 'next/head'
import Image from 'next/image'

import {ServiceCard} from '@Components/service-card/ServiceCard';
import {ContactForm} from '@Components/contact-form/ContactForm';
import {AppNavbar} from '@Components/navbar/Navbar';
import {AppHeader} from '@Components/header/Header';

import LABELS from '@Strings';

export default function Home() {
  return (
    <div className="App">      
        <Head>
          <title>{LABELS.smartPartCallToAction}</title>
          <meta name="description" content={LABELS.metaDescription}></meta>
        </Head>
        <AppNavbar />
        <AppHeader />
        
        
        <section className="page-section portfolio" id="services">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Servicii</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5 flex">
                        <ServiceCard
                            title={LABELS.planAndAnalyze}
                            text={LABELS.planAndAnalyzeDescription}
                            img={'/assets/svg/prototype.svg'}
                            imgAlt={LABELS.planAndAnalyzeDescription}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <ServiceCard
                            title={LABELS.feedbackBasedSolution}
                            text={LABELS.feedbackBasedSolutionDescription}
                            img={'/assets/svg/ux.svg'}
                            imgAlt={LABELS.feedbackBasedSolutionDescription}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <ServiceCard
                            title={LABELS.forgetPapers}
                            text={LABELS.forgetPapersDescription}
                            img={'/assets/svg/content-management.svg'}
                            imgAlt={LABELS.forgetPapersDescription}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <ServiceCard
                            title={LABELS.weAreHereToHelp}
                            text={LABELS.weAreHereToHelpDescription}
                            img={'/assets/svg/customer-service.svg'}
                            imgAlt={LABELS.weAreHereToHelpDescription}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <ServiceCard
                            title={LABELS.getYourBussinessOnline}
                            text={LABELS.getYourBussinessOnlineDescription}
                            img={'/assets/svg/location.svg'}
                            imgAlt={LABELS.getYourBussinessOnlineDescription}
                        />
                    </div>
                </div>
            </div>
        </section>
        
        
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-white">Despre Noi</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <p className="lead">
                            Suntem o echipă de tineri entuziaști cu experiență în domeniul IT, ce doresc să aduca inovație serviciilor din România.
                            Indiferent de domeniu, scopul echipei noastre este să creeze o soluție potrivită ce va sporii eficiența în firma dumeanvoastra. 
                        </p>
                    </div>
                    
                </div>
                
                
            </div>
        </section>

        <section className="page-section portfolio" id="steps">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Demo Gratuit</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    
                    <div className="col-md-12 col-lg-4 mb-5">
                        <ServiceCard
                            title={"Contactează-ne!"}
                            text={"Printr-un email la smartpartinfo@gmail.com sau completează formularul de mai jos și te contactăm noi."}
                            img={'/assets/svg/1.svg'}
                            imgAlt={"Printr-un email la smartpartinfo@gmail.com sau completează formularul de mai jos și te contactăm noi."}
                        />
                    </div>

                    <div className="col-md-12 col-lg-4 mb-5">
                        <ServiceCard
                            title={"Analiză de bază"}
                            text={"Organizăm o întalnire, analizăm procesele din compania ta, și discutăm idei preliminare"}
                            img={'/assets/svg/2.svg'}
                            imgAlt={"Organizăm o întalnire, analizăm procesele din compania ta, și discutăm idei preliminare"}
                        />
                    </div>


                    <div className="col-md-12 col-lg-4 mb-5">
                        <ServiceCard
                            title={"Prezentare demo"}
                            text={"În decurs de 30 de zile, revenim cu o aplicație demonstrativa gratuită, și stabilim o posbila colaborare."}
                            img={'/assets/svg/3.svg'}
                            imgAlt={"În decurs de 30 de zile, revenim cu o aplicație demonstrativa gratuită, și stabilim o posbila colaborare."}
                        />
                    </div>        
                </div>
            </div>
        </section>
        <hr/>
        <section className="page-section half-section" id="contact">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Locație</h4>
                        <p className="lead mb-0">
                            <br />
                            Brașov, România
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Social Media</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-instagram"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Despre SmartPart</h4>
                        <p className="lead mb-0">
                            Smart Part reprezinta o echipă de programatori entuziaști ce doresc sa ofere soluții digitale companiilor din România.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className="copyright py-4 text-center text-white">
            <div className="container">
                <small>
                    Copyright &copy; SmartPart {new Date().getFullYear()}
                </small>
            </div>
        </div>
    </div>
  )
}
