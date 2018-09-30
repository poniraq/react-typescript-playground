import * as React from 'react';
import { Spinner } from '@app/components/Spinner';
import './LoadingMask.scss';

export interface LoadingMaskProps extends React.HTMLAttributes<HTMLDivElement>, React.Props<HTMLDivElement> {
  retry?: () => void;
  error?: string;
  size?: number | string | undefined;
}

export const LoadingMask: React.ComponentType<LoadingMaskProps> = React.forwardRef((props, ref) => {
  const { className, error, retry, size, ...rest } = props;

  return (
    <div ref={ref} className={`LoadingMask ${className}`} {...rest}>
      { error ? (
        <div className="error-container">
          <span ref={ref} className="error-message">{ error }</span>
          {Boolean(retry) && <button className="error-retry" onClick={ retry }>Retry</button>}
        </div>
      ) : (
        <Spinner size={size} />
      )}
    </div>
  );
});
export default LoadingMask;