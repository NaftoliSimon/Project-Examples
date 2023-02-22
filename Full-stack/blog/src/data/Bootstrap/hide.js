//This file is for using the bootstrap hidden display properties. Size combinations can be added if need. 
//The hide sizes means it is hidden only for that size. The regular show sizes means it is shown only for that size.

const hide = {
  all: 'd-none',
  xs: 'd-none d-sm-block',
  sm: 'd-sm-none d-md-block',
  md: 'd-md-none d-lg-block',
  lg: 'd-lg-none d-xl-block',
  xl: 'd-xl-none',
  xs_sm: 'd-none d-sm-block d-md-block', //hides for extra small and small sizes
  lg_xl: 'd-lg-none',
  none: 'd-block'
}
const show = {
  all: 'd-block',
  xs: 'd-block d-sm-none',
  sm: 'd-none d-sm-block d-md-none',
  md: 'd-none d-md-block d-lg-none',
  lg: 'd-none d-lg-block d-xl-none',
  xl: 'd-none d-xl-block',
  xs_sm: 'd-block d-sm-none d-md-none',
  lg_xl: 'd-none d-lg-block',
  none: 'd-none',
};


export default hide;
export {show};