import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import center from '../../../../data/Bootstrap/center';

function DefaultCard({ header, text, buttonText, onButtonClick }) {
    return (
        <Card className={`bgColor-primary m-3 rounded-0 rounded-top`} style={{ width: '20em' }}>
            <Card.Header className='bgColor-primary color-secondary-reverse'>{header}</Card.Header>
            <Card.Body className='bgColor-primaryLight'>
                <Card.Text>
                    {text}
                </Card.Text>
                <div className={`btn button  ${center}`} onClick={() => onButtonClick()} role="button">{buttonText}</div>
            </Card.Body>
        </Card>
    );
}

export default DefaultCard;