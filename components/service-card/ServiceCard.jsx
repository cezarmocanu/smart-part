import Image from'next/image';
import {PropTypes} from 'prop-types';
import {Card} from 'react-bootstrap';
import LABELS from '@Strings';
import {MotionHover} from './ServiceCard.hover';
function ServiceCard({img, imgAlt, title, text}){
    return (
        <MotionHover>
            <Card style={{ width: '18rem', height: '100%' }} bg='white' className="border-0 m-auto">
                <Card.Header className='bg-white border-light'>
                    <Image layout="intrinsic" width="256" height="256" src={img} alt={imgAlt} /> 
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-secondary">{title}</Card.Title>
                    <Card.Text className="text-secondary">{text}</Card.Text>
                </Card.Body>
            </Card>
        </MotionHover>
    );
}

ServiceCard.propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
};

ServiceCard.defaultProps = {
    img: 'assets/svg/ux.png',
    imgAlt: LABELS.smartPartCallToAction,
    title: 'Card Header',
    text: 'Card Content'
};

export {ServiceCard};