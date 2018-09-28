import * as React from 'react';
import * as Loadable from 'react-loadable';
import { LoadingMaskProps, LoadingMask } from '@app/components/LoadingMask';

type LoadingComponentProps = LoadingMaskProps & Loadable.LoadingComponentProps;
export const LoadingComponent: React.ComponentType<LoadingComponentProps> = (props: LoadingComponentProps) => {
  const { className, error, isLoading, timedOut, pastDelay, ...rest } = props;
  let errorMessage;

  if (error) {
    errorMessage = 'Failed to load component...';
  }

  return (
    Boolean(pastDelay) ?
      <LoadingMask size={96} error={errorMessage} className={`LoadingComponent ${className}`} {...rest}/>
    : null
  );
};
export default LoadingComponent;