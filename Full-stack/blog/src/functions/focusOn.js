export default function focusOn(targetElementName, targetElementType = 'input') {
    const inputElem = `${targetElementType}[name=${targetElementName}]`
    const element = document.querySelector(inputElem);
    element.focus();
}