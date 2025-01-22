import React from 'react'
import Loading from '../loading/Loading';

const LoadingWrapper = ({isLoading , children}) => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <Loading />
        </div>
      );
    }
  
    return <>{children}</>;
  };

export default LoadingWrapper