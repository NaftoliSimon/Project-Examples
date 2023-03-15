//Use navigate hook but with the option to make page scroll to the top when navigating
import { useNavigate } from "react-router-dom";

const useCustomNav = () => { 
    const navigate = useNavigate();

    return (to, scrollToTop = false) => {
        if (scrollToTop) {
            window.scrollTo(0, 0);
        }
        navigate(to);
    }
};
export default useCustomNav;