import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export default function LinkWithTooltip({ linkText, linkTo, tooltipText, externalLink, tooltipDirection = 'top' }) {
    //TODO: fix tooltip alignment (tooltip triangle arrow is aligned to the left instead of middle, except when leaving hover)
    //Remove Tooltip style to see triangle arrow
    const linkStyle = `link-color fst-italic pointer`
    const scrollToBlogs = linkText.toLowerCase() === 'blogs' ? true : false;
    const internalLink = <div className={linkStyle} onClick={() => Navigate(linkTo, scrollToBlogs)}>{linkText}</div>;
    const externalLinkComponent = <a className={linkStyle} href={linkTo} target='_blank' rel='noreferrer'>{linkText}</a>
    const link = !externalLink ? internalLink : externalLinkComponent;
    return (
        <OverlayTrigger
            overlay={<Tooltip style={{ 'padding': '0px'}}>{tooltipText}</Tooltip>}
            placement={tooltipDirection} delayShow={300} delayHide={150}>{link}</OverlayTrigger>
    );
}