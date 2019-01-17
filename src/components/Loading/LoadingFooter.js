import React from 'react';
import Spinner from './Spinner';


const FooterLoading = ({show}) => {

  if (!show) {
    return null;
  }
  
  return (
    <Spinner style={{height: 75}}/>
  )
}


export default FooterLoading;