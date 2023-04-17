export default function focusOn(/*elemString*/inputName) {
    const inputElem = `input[name=${inputName}]`
    const element = document.querySelector(/*elemString*/inputElem);
    element.focus();
}