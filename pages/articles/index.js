import Image from 'next/image';
import Link from 'next/link'
import {Col, Row} from 'react-bootstrap';

import {AppNavbar} from '@Components/navbar/Navbar';
import styles from '@Styles/Blog.module.scss';
 
export default function Articles(){
    return (
        <div className="app">
            <AppNavbar />
            <div className="app-container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mt-5 mb-0">Articole</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <Row className="justify-content-center align-items-start fluid mx-0">
                    <Link href="/articole/5-motive-pentru-care-este-importanta-digitalizarea-afacerii-tale">
                        <Col sm={10} md={10} lg={6} as="article" className={`${styles['article']} p-0`}>
                            <div className={`${styles['article-image']}`}>
                                <Image style={{display:'block'}}layout="intrinsic" width={766} height={485} src="/assets/blog/digitalizeaza-afacerea.jpg" alt="5-motive-pentru-care-este-importanta-digitalizarea-afacerii-tale"/>
                            </div>
                            <div className={`${styles['article-overlay']} fluid`}>
                                <h5 className={styles['title']}>5 motive pentru care e necesară digitalizarea afacerii tale</h5>
                            </div>
                        </Col>
                    </Link>
                </Row>
            </div>
        </div>
    );
}