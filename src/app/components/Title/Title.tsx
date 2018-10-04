import * as React from 'react';
import './Title.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export class Title extends React.Component<Props> {
  render() {
    const { title, className, ...rest } = this.props;

    return (
      <h1 className={`Title ${className}`} {...rest} >{title}</h1>
    );
  }
}
export default Title;