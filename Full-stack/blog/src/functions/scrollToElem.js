export default function scrollToElem(targetElemID) {
    const offset = -80 //80 is the offset height (because of the fixed header)
    window.scrollTo({
        top: document.getElementById(targetElemID).offsetTop + offset 
      })
}