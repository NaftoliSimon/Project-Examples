import Card from 'react-bootstrap/Card';
import center from '../../../data/Bootstrap/center';
import pillButton from '../../../data/Bootstrap/pillButton';

function DefaultCard({ header, text, buttonText, onButtonClick, width = '18em' }) {
    return (
        <>
        <Card className={`bgColor-primary shadow-lg welcome-card`} style={{ width:  width}}>{/* d-block d-sm-none '27em' */}
            <Card.Header className='bgColor-primary fw-bold color-secondary-reverse'>{header}</Card.Header>
            <Card.Body className='bgColor-primary'>
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