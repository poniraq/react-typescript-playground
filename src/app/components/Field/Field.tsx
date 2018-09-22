import * as React from 'react';
import './Field.scss';

interface Props {
  value: string;
  onChange: (title: string) => void;
}

export class Field extends React.Component<Props> {
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const callback = this.props.onChange;

    callback(e.target.value);
  }

  render() {
    const { value } = this.props;

    return (
      <input onChange={this.onChange} type="text" value={value} />
    );
  }
}
export default Field;