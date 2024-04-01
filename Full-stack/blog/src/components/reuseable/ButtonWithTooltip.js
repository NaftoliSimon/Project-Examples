// ButtonWithTooltip.js
import React, { useState } from 'react';
import { ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import useLocalStorage from 'use-local-storage';

export default function ButtonWithTooltip({ button, tooltip, direction = 'top', maxDisplays = 12, maxClicks = 1 }) { //tooltip param can be either a string or tooltip component
  // const [showTooltips, setShowTooltips] = useLocalStorage('showTooltips', true);

  const tooltipComponent =
    typeof tooltip === 'string' ? (
      <Tooltip>{tooltip}</Tooltip>
    ) : React.isValidElement(tooltip) ? (
      tooltip
    ) : null;

  const [remainingDisplays, setRemainingDisplays] = useState(maxDisplays); //remaining/max displays is based on hover
  const [remainingClicks, setRemainingClicks] = useState(maxClicks); //stops displaying tooltip after remainingClicks amount of clicks

  const handleTooltipVisibility = () => {
    if (remainingDisplays > 0) {
      setRemainingDisplays(remainingDisplays - 1);
    }
  };

  const handleButtonClick = () => {
    if (remainingClicks > 0) {
      setRemainingClicks(remainingClicks - 1);
    }
  };

  const overlay =
    tooltipComponent && remainingDisplays > 0 && remainingClicks > 0 ? (
      <OverlayTrigger
        placement={direction}
        overlay={tooltipComponent}
        onEnter={handleTooltipVisibility}
      >
        <div onClick={handleButtonClick}>{button}</div>
      </OverlayTrigger>
    ) : (
      <div onClick={handleButtonClick}>{button}</div>
    );

  return <ButtonToolbar>{overlay}</ButtonToolbar>;
}
