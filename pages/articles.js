import {useMemo} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import {ARTICLES_DB} from '@Constants';

import {Col, Row} from 'react-bootstrap';

import styles from '@Styles/Blog.module.scss';
import LABELS from '@Strings';

const AppNavbar = dynamic(() => import('@Components/navbar/Navbar'));
const PageSection = dynamic(() => import('@Components/page-section/PageSection'));
const PageSectionHeading = dynamic(() => import('@Components/page-section-heading/PageSectionHeading'));


export default function Articles({articles}){
    const renderArticle = (article) => {
        return (
        <Col sm={10} md={10} lg={6} className='p-3' key={`article-col-${article.id}`}>
            <Link href={`/${article.title.split(' ').join('-')}/articol/${article.id}`}>
                <article className={`${styles['article']}`}>
                    <div className={`${styles['article-image']} fluid`}>
                        <Image layout='responsive'
                            priority={true}
                            quality={35}
                            width={766}
                            height={485}
                            src={article.image}
                            alt={article.title}
                            />
                    </div>
                    <div className={`${styles['article-overlay']} fluid`}>
                        <h5 className={styles['title']}>
                            {article.title}
                        </h5>
                    </div>
                </article>
            </Link>
        </Col>);
    };


    const articleList = useMemo(() => {
        return articles.map(article => renderArticle(article));
    },[articles]);


    return (
        <div className='app'>
            <AppNavbar />
            <PageSection id='services'>
                <PageSectionHeading text={LABELS.articles} />
                <Row className='justify-content-center align-items-start fluid mx-0'>
                    {articleList}
                </Row>
            </PageSection>
        </div>
    );
}

Articles.defaultProps = {
    articles: []
};

export async function getStaticProps() {
    return {
        props: {
        articles: ARTICLES_DB
        }
    }
};