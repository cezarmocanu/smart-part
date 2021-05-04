import Image from 'next/image';
import dynamic from 'next/dynamic'
import {findOne, ARTICLES_DB} from '@Constants';

const AppNavbar = dynamic(() => import('@Components/navbar/Navbar'));
const PageSection = dynamic(() => import('@Components/page-section/PageSection'));
const PageSectionHeading = dynamic(() => import('@Components/page-section-heading/PageSectionHeading'));

export default function Article({title, image, paragraphs}){
    
    return (
        <div className='app'>
            <AppNavbar />
            <PageSection>
                <PageSectionHeading text={title} />
                {image && <Image src={image} alt={title} width={256} height={256} quality={35}/>}
                {
                    paragraphs.map( par => {
                        return (
                            <div key={par.title}>
                                {par.image && <Image src={par.image} layout='responsive' alt={par.title} width={256} height={256} quality={35} />}
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
    title: '',
    image: undefined,
    paragraphs: []
};

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