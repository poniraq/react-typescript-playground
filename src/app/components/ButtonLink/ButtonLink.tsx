import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import './ButtonLink.scss';

export type Props = LinkProps;
export const ButtonLink: React.StatelessComponent<Props> = ({ className, children, ...rest }) => {
  return (
    <Link className={`ButtonLink ${className}`} {...rest}>
      <button>{children}</button>
    </Link>
  );
};
export default ButtonLink;