//Use navigate hook but scrolls to the top when navigating (default). Or scrolls to the inputted 'scrollToHeight'
import { useNavigate } from "react-router-dom";
import { scrollToBlogsId } from "../data/scrollToHeight";

const useCustomNav = () => {
    const navigate = useNavigate();
    const headerHeight = 70;

    return (to, scrollToBlogsList = false) => { //scrollToBlogsList (formerly blogListLocation) has been updated from a number to a boolean. It's use cases need to be updated
        if (scrollToBlogsList) {
                const offset = -headerHeight;
                setTimeout(() => window.scrollTo({
                    top: document.getElementById(scrollToBlogsId).offsetTop + offset,
                    behavior: 'smooth',
                }), 0);
        }
        else {
            window.scrollTo(0, 0) //scroll to top of page
        }
        navigate(to);
    }
};
export default useCustomNav;