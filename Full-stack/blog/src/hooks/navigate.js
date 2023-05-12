//Use navigate hook but scrolls to the top when navigating (default). Or scrolls to the inputted 'scrollToHeight'
import { useNavigate } from "react-router-dom";

const useCustomNav = () => { 
    const navigate = useNavigate();

    return (to, scrollToHeight = null) => {
        if (scrollToHeight) {
                setTimeout(() => window.scrollTo(0, scrollToHeight), 0);
        }
        else {
            window.scrollTo(0, 0) //scroll to top of page
        }
        navigate(to);
    }
    // return (toPage, scrollToElem) => {
    //     if (scrollToElem) {
    //             setTimeout(() => window.scrollTo(scrollToElem), 0);
    //     }
    //     else {
    //         window.scrollTo(0, 0) //scroll to top of page
    //     }
    //     navigate(toPage);
    // }
    // return (to, elementId = null) => {
    //     if (elementId) {
    //             const element = document.getElementById(elementId);
    //               // 👇 Will scroll smoothly to the top of the next section
    //               element.scrollIntoView({ behavior: 'smooth' });
                
    //     }
    //     else {
    //         window.scrollTo(0, 0) //scroll to top of page
    //     }
    //     navigate(to);
    // }
};
export default useCustomNav;