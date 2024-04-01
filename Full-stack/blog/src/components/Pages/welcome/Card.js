import React, { useRef } from 'react';
import styles from './card.module.scss';
import { useLocalStorage } from 'usehooks-ts';
import ButtonWithTooltip from '../../reuseable/ButtonWithTooltip';

export default function Card({ header, text, buttonText, onButtonClick, cardColor, icon, width = '18em' }) {
    const [showSwirls, setShowSwirls] = useLocalStorage('showSwirls', true);
    const cardRef = useRef(null);

    const handleCardClick = (event) => {
        // Check if the clicked element is not the button
        if (!event.target.closest('.btn')) {
            // Clicked outside the button, toggle showSwirls
            setShowSwirls(!showSwirls);
        }
    };

    const noColors = 'transparent, transparent';
    const defaultColors = noColors;
    const cardColors = cardColor?.split(', ') || noColors; //cardColor is formatted as `color1, color2` (see data/welcomeCardConsts.js)
 
    const linearGradientColors = `linear-gradient(180deg, ${cardColor || defaultColors})`;
    const linearSplitColors = `linear-gradient(180deg, ${cardColors[0]} 50%, ${cardColors[1]} 50%)`;
    let beforeStyles = {
        backgroundImage: linearGradientColors //This sets the border of the card to be a fading gradient of the 2 colors in the cardColor string parameter
    };
    if (showSwirls) {
        beforeStyles['--split-color'] = linearSplitColors; //This sets the swirls of the card to be a split gradient of the 2 colors in the cardColor string parameter. This ensures that the 2 swirls will both be ENTIRELY the same 2 color as the border gradient (one is entirely color1, the other is entirely color2), causing the swirl to blend in with it's same color of the gradient background
    }

    return (
        <div className={styles.card} style={beforeStyles} onClick={handleCardClick} ref={cardRef}>
            <div>
                <h2 className={`ps-2`}>{header}</h2>
                <p>{text}</p>
                <button className={`w-100 btn border border-2 popOut`} onClick={onButtonClick}>
                    <span className={`pe-2 cardIcon`}>{icon}</span>
                    <span>{buttonText}</span>
                </button>
            </div>
        </div>
        );
}
//<ButtonWithTooltip button={cardJSX} tooltip={'Click the card to Remove/Show the Border Swirls'} maxDisplays={1}/>


















/* Old Card Style */
// import Card from 'react-bootstrap/Card';
// import isMobile from '../../../data/isMobile';
// import subtractPixelsFromString from '../../../functions/subtractPixelsFromString';
// import center from '../../../data/Bootstrap/center';

// function DefaultCard({ header, text, buttonText, onButtonClick, cardColor, icon, width = '18em' }) {
//     if (isMobile) {
//         width = subtractPixelsFromString(width, 2); //TODO: use css instead of javascript for different screen sizes
//     }
//     const textColor = cardColor === 'yellow' ? 'text-dark' : 'text-light'; //yellow is a lighter color and need darker text to contrast, while red and green need lighter text
//     const cardStyle = {
//         width: width,
//         backgroundColor: `var(--bs-${cardColor})`,
//         opacity: `90%`,
//         // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow
//     };
//     return (
//         <>
//             <Card className={`welcome card-${cardColor} ${textColor} shadow-lg text-center`} style={cardStyle}>{/* d-block d-sm-none '27em' */}
//                 <Card.Header className='fw-bold color-secondary-reverse border-0 pb-1'>
//                     {/* <span className={`pe-2 cardIcon`}>{icon}</span> */}
//                     {header}
//                 </Card.Header>
//                 <Card.Body className='rounded pt-1 w-100'>
//                     {/* <Card.Title className='bgColor-primary fw-bold color-secondary-reverse'>{header}</Card.Title> */}
//                     <Card.Text>
//                         {text}
//                     </Card.Text>
//                     <button className={`w-100 btn btn-${cardColor} ${textColor}`} onClick={() => onButtonClick()}>
//                         <span className={`pe-2 cardIcon`}>{icon}</span>
//                         <span>{buttonText}</span>
//                     </button>
//                 </Card.Body>
//             </Card>
//         </>
//     );
// }

// export default DefaultCard;