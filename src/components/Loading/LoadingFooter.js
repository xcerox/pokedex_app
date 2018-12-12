import React from 'react';
import Spinner from './Spinner';


const FooterLoading = ({show}) => {

  if (!show) {
    return null;
  }
  
  return (
    <Spinner />
  )
}


export default FooterLoading;