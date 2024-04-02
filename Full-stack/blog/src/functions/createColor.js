export default function lightenOrDarkenColor(color) {
    //This function returns a new color based on the input parameter color. If it is given a darker color, it will return a lighter version of the same color. If it is given a light color, it will return a darker version of the same color.
    let results;

    // Helper function to convert RGB to HEX
    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    // Helper function to adjust brightness
    function adjustBrightness(component) {
        const contrastDifference = 15; // Increased this number to increase the contrast between the input and output colors, (decrease this number to make the colors closer and more similar to each other)
        return Math.round(Math.min(255, component * contrastDifference)); 
    }

    // Determine the format of the color
    let format;
    if (color.startsWith('#')) {
        format = 'hex';
    } else if (color.startsWith('rgb')) {
        format = 'rgb';
    } else {
        const errorMsg = 'Unsupported color format. Please use HEX or RGB.'
        results = errorMsg;
        throw new Error(errorMsg);
    }

    // Extract RGB components
    let r, g, b;
    if (format === 'hex') {
        r = parseInt(color.substr(1, 2), 16);
        g = parseInt(color.substr(3, 2), 16);
        b = parseInt(color.substr(5, 2), 16);
    } else if (format === 'rgb') {
        const matches = color.match(/\d+/g);
        r = parseInt(matches[0]);
        g = parseInt(matches[1]);
        b = parseInt(matches[2]);
    }

    // Adjust brightness
    if ((r * 0.299 + g * 0.587 + b * 0.114) > 186) {
        // If it's a light color, darken it
        r = Math.round(r * 0.8);
        g = Math.round(g * 0.8);
        b = Math.round(b * 0.8);
    } else {
        // If it's a dark color, lighten it
        r = adjustBrightness(r);
        g = adjustBrightness(g);
        b = adjustBrightness(b);
    }

    // Convert back to the original format
    if (format === 'hex') {
        results = rgbToHex(r, g, b);
    } else {
        results = `rgb(${r}, ${g}, ${b})`; // Fixed the missing assignment operator
    }
    // console.log(results);
    return results;
}
