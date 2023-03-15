// // This function will log out the user if there is no activity after x amount of 'timeoutMinutes'
// export default function setupAutoLogout(timeoutMinutes, setLoggedIn, setShowLogin, loggedIn) {
    
//     let timeoutId;
//     const timeoutMs = timeoutMinutes * 60 * 1000;
//     if (loggedIn) { startAutoLogout() }

//     function startAutoLogout() {
//         if (!loggedIn) {
//             document.removeEventListener('mousemove', resetAutoLogout);
//             document.removeEventListener('keydown', resetAutoLogout);
//             clearTimeout(timeoutId);
//         } else {
//             timeoutId = setTimeout(logout, timeoutMs);
//         }
//     }

//     function resetAutoLogout() {
//         console.log('resetAutoLogout called');
//         if (timeoutId) { clearTimeout(timeoutId) }
//         startAutoLogout();
//     }

//     function logout() {
//         if (loggedIn) {
//             clearTimeout(timeoutId);
//             setLoggedIn(false);
//             // Perform any other necessary cleanup or redirection
//             console.log('User logged out due to inactivity');
//             // setShowLogin('User Logged Out Due To Inactivity');
//         }
//     }

//     if (loggedIn) {
//         console.log('eventListeners called');
//         clearTimeout(timeoutId);
//         document.addEventListener('mousemove', resetAutoLogout);
//         document.addEventListener('keydown', resetAutoLogout);
//     }
// }