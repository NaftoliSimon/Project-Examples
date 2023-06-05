export default function logOut(setShowLogin, setLoggedIn) {
    setShowLogin(false); //stops log in modal from popping up
    setLoggedIn(false);
    window.location.reload(false);//reloads page (to remove all elements that should only show when logged in) 
}