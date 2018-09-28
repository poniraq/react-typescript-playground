import * as React from 'react';
import MDSpinner, { MDSpinnerProps } from 'react-md-spinner';

type Props = MDSpinnerProps;
export const Spinner = (props: Props) => (
  <MDSpinner {...props} />
);
export default Spinner;