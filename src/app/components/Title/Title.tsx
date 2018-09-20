import * as React from 'react';
import './Title.scss';

interface Props {
    title: string
}

export class Title extends React.Component<Props> {
    render() {
        const { title } = this.props;

        return (
            <h1 className="Title">{title}</h1>
        );
    }
}
export default Title;