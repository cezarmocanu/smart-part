import Head from 'next/head'
import Image from 'next/image'

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
                    
                    <div className="col-md-12 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <Image layout="fill"className="img-fluid" src="/assets/svg/prototype.svg" alt="..." />
                            <div className="service-description mt-2">
                                <h4>Analiză și planificare</h4>
                                <p>Realizăm o analiză a proceselor ce se deruleaza in firma dumeanvoastra și propunem posibile solutii de digitalizare a acestora.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <Image layout="fill"className="img-fluid" src="/assets/svg/ux.svg" alt="..." />
                            <div className="service-description mt-2">
                                <h4>Soluție bazată pe feedback</h4>
                                <p>Construim o soluție digitală bazată pe nevoile și provocarile pe care le întampinați.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <Image layout="fill"className="img-fluid" src="/assets/svg/file-storage.svg" alt="..." />
                            <div className="service-description mt-2">
                                <h4>Uită de hârtii!</h4>
                                <p>Propunem soluții ce au rolul de a simplifica și organiza procesul birocratic intern.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <Image layout="fill"className="img-fluid" src="/assets/svg/customer-service.svg" alt="..." />
                            <div className="service-description mt-2">
                                <h4>Mentenanță și colaborare</h4>
                                <p>În cazul in care întâmpini defecțiuni tehnice îți suntem alaturi.</p>
                            </div>
                        </div>
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
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <Image layout="fill"className="img-fluid" src="/assets/svg/1.svg" alt="..." />
                            <div className="service-description mt-2">
                                <h4>Contactează-ne!</h4>
                                <p>Printr-un email la <span className="email">smartpartinfo@gmail.com</span> sau completează formularul de mai jos și te contactăm noi.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <Image layout="fill"className="img-fluid" src="/assets/svg/2.svg" alt="..." />
                            <div className="service-description mt-2">
                                <h4>Analiză de bază</h4>
                                <p>Organizăm o întalnire, analizăm procesele din compania ta, și discutăm idei preliminare</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <Image layout="fill"className="img-fluid" src="/assets/svg/3.svg" alt="..." />
                            <div className="service-description mt-2">
                                <h4>Prezentare demo</h4>
                                <p>În decurs de 30 de zile, revenim cu o aplicație demonstrativa gratuită, și stabilim o posbila colaborare.</p>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        </section>
        <hr/>
        <section className="page-section" id="contact">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-8 mx-auto">
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
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
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
