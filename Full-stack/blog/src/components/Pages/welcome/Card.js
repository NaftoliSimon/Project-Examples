import Card from 'react-bootstrap/Card';
import isMobile from '../../../data/isMobile';
import subtractPixelsFromString from '../../../functions/subtractPixelsFromString';
import center from '../../../data/Bootstrap/center';

function DefaultCard({ header, text, buttonText, onButtonClick, cardColor, icon, width = '18em' }) {
    if (isMobile) {
        width = subtractPixelsFromString(width, 2); //TODO: use css instead of javascript for different screen sizes
    }
    const textColor = cardColor === 'yellow' ? 'text-dark' : 'text-light'; //yellow is a lighter color and need darker text to contrast, while red and green need lighter text
    const cardStyle = {
        width: width,
        backgroundColor: `var(--bs-${cardColor})`,
        opacity: `90%`,
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow
    };
    return (
        <>
            <Card className={`welcome card-${cardColor} ${textColor} shadow-lg text-center`} style={cardStyle}>{/* d-block d-sm-none '27em' */}
                <Card.Header className='fw-bold color-secondary-reverse border-0 pb-1'>
                    {/* <span className={`pe-2 cardIcon`}>{icon}</span> */}
                    {header}
                </Card.Header>
                <Card.Body className='rounded pt-1 w-100'>
                    {/* <Card.Title className='bgColor-primary fw-bold color-secondary-reverse'>{header}</Card.Title> */}
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <button className={`w-100 btn btn-${cardColor} ${textColor}`} onClick={() => onButtonClick()}>
                        <span className={`pe-2 cardIcon`}>{icon}</span>
                        <span>{buttonText}</span>
                    </button>
                </Card.Body>
            </Card>
        </>
    );
}

export default DefaultCard;