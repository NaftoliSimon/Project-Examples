//mobile is any device that uses touch screen only, with no mouse (usually a phone or tablet)
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
export default isMobile;