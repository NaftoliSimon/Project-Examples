// LinkWithTooltip.js
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function LinkWithTooltip({ id, children, href, tooltip, maxDisplays = Infinity, maxClicks = Infinity }) {
  const tooltipComponent =
    typeof tooltip === 'string' ? (
      <Tooltip id={id}>{tooltip}</Tooltip>
    ) : React.isValidElement(tooltip) ? (
      tooltip
    ) : null;

  const [remainingDisplays, setRemainingDisplays] = useState(maxDisplays);
  const [remainingClicks, setRemainingClicks] = useState(maxClicks);

  const handleTooltipVisibility = () => {
    if (remainingDisplays > 0) {
      setRemainingDisplays(remainingDisplays - 1);
    }
  };

  const handleLinkClick = () => {
    if (remainingClicks > 0) {
      setRemainingClicks(remainingClicks - 1);
    }
  };

  const overlay =
    tooltipComponent && remainingDisplays > 0 && remainingClicks > 0 ? (
      <OverlayTrigger
        overlay={tooltipComponent}
        placement="top"
        delayShow={300}
        delayHide={150}
        onEnter={handleTooltipVisibility}
      >
        <a href={href} onClick={handleLinkClick}>
          {children}
        </a>
      </OverlayTrigger>
    ) : (
      <a href={href} onClick={handleLinkClick}>
        {children}
      </a>
    );

  return overlay;
}
