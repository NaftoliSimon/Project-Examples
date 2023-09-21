//Use navigate hook but scrolls to the top when navigating (default). Or scrolls to the blogsList when 'text' param is passed in has the word "blogs"
import { useNavigate } from "react-router-dom";
import { scrollToBlogsId } from "../data/scrollToHeight";

const useCustomNav = () => {
    const navigate = useNavigate();
    const headerHeight = 70;

    return (to, text = false) => {
        if (text && text.toLowerCase().includes('blogs')) { //If the text parameter contains "blogs", it scroll to the blogsList (ie button text says "Return to Blogs", "Go to Blogs", "Blogs", ect)
                const offset = -headerHeight;
                setTimeout(() => window.scrollTo({ //set timeout allows navigating from a different page (ie About page) to the blogsList (home page) and then scrolling to 'scrollToBlogsId', otherwise it cant find an id from a different page
                    top: document.getElementById(scrollToBlogsId).offsetTop + offset,
                    behavior: 'smooth',
                }), 0);
        }
        else { //If no text is given to the function or if the text does not include "blogs", it (default) scrolls to the top of the page.
            window.scrollTo(0, 0) //scroll to top of page
        }
        navigate(to); //Always navigates to the parameter url path of 'to' 
    }
};
export default useCustomNav;