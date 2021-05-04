import Image from 'next/image';
import {findOne, ARTICLES_DB} from '@Constants';

import {PageSection} from '@Components/page-section/PageSection';
import {PageSectionHeading} from '@Components/page-section-heading/PageSectionHeading';
import {AppNavbar} from '@Components/navbar/Navbar';


export default function Article({title, image, paragraphs}){
    
    return (
        <div className='app'>
            <AppNavbar />
            <PageSection>
                <PageSectionHeading text={title} />
                {image && <Image src={image}  width={256} height={256} quality={35}/>}
                {
                    paragraphs.map( par => {
                        return (
                            <div>
                                {par.image && <Image src={par.image} layout='responsive' width={256} height={256} quality={35}/>}
                                <h3>{par.title}</h3>
                                <p>{par.text}</p>
                            </div>)
                    })
                }
            </PageSection>
        </div>
    );
}

Article.defaultProps = {
    title: 'Articolul nu exista',
    image: undefined,
    paragraphs: []
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    slug: 'acasa',
                    id: '1'
                }
            }
        ],
        fallback: true
    }
}
export async function getStaticProps(context) {
    const {id} = context.params;
    const article = findOne(ARTICLES_DB, parseInt(id));

    return {
        props:{
            ...article
        }
       
    }
};  