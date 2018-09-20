import * as React from 'react';
import './Field.scss';

interface Props {
  title: string;
  onChange: (title: string) => void;
}

export class Field extends React.Component<Props> {
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const callback = this.props.onChange;

    callback(e.target.value);
  }

  render() {
    const { title } = this.props;

    return (
      <input onChange={this.onChange} type="text" value={title} />
    );
  }
}
export default Field;