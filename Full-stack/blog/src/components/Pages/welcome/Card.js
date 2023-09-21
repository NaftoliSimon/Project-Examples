import Card from 'react-bootstrap/Card';
import center from '../../../data/Bootstrap/center';
import pillButton from '../../../data/Bootstrap/pillButton';
import isMobile from '../../../data/isMobile';
import subtractPixelsFromString from '../../../functions/subtractPixelsFromString';

function DefaultCard({ header, text, buttonText, onButtonClick, width = '18em' }) {
    if(isMobile) {
        width = subtractPixelsFromString(width, 2); //TODO: use css instead of javascript for different screen sizes
    }
    return (
        <>
        <Card className={`bgColor-primary shadow-lg opacity-85`} style={{ width:  width}}>{/* d-block d-sm-none '27em' */}
            <Card.Header className='bgColor-primary fw-bold color-secondary-reverse'>{header}</Card.Header>
            <Card.Body className='bgColor-primary rounded'>
                {/* <Card.Title className='bgColor-primary fw-bold color-secondary-reverse'>{header}</Card.Title> */}
                <Card.Text>
                    {text}
                </Card.Text>
                <div className={`btn button border border-primary ${pillButton} ${center}`} onClick={() => onButtonClick()} role="button">{buttonText}</div>
            </Card.Body>
        </Card>
        </>
    );
}

export default DefaultCard;