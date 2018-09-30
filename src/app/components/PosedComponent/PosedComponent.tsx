import * as React from 'react';
import posed from 'react-pose';
import { DomPopmotionConfig } from 'popmotion-pose';
import { PoseElementProps } from 'react-pose/lib/components/PoseElement/types';


type ReactComponent<T, P> = React.ComponentType<P & React.ClassAttributes<T>>;
type PoseConfig = DomPopmotionConfig;


const HostRefHOC = function<T, P extends object = {}>(Component: ReactComponent<T, P>) {
  return (props: PoseElementProps & P) => {
    const { hostRef, innerRef, ...rest } = (props as any);

    return <Component ref={hostRef} {...rest}/>;
  };
};

const InitPoseHOC = function<T, P extends object = {}>(Component: ReactComponent<T, PoseElementProps & P>) {
  return (props: PoseElementProps & P) => (
    <Component initialPose="exit" pose="enter" {...props} />
  );
};

export const PosedComponent = function<T, P extends object = {}>(Component: ReactComponent<T, P>, options: PoseConfig) {
  return InitPoseHOC(posed(HostRefHOC(Component))(options));
};
export default PosedComponent;