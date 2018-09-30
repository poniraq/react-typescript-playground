import * as React from 'react';
import { Button } from 'antd';
import { Link, LinkProps } from 'react-router-dom';
import './ButtonLink.scss';


export type Props = LinkProps;
export const ButtonLink: React.StatelessComponent<Props> = ({ className, children, ...rest }) => {
  return (
    <Link className={`ButtonLink ${className}`} {...rest}>
      <Button type="primary">{children}</Button>
    </Link>
  );
};
export default ButtonLink;