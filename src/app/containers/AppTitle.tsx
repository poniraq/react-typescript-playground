import { Title } from '../components/Title';
import { State } from 'src/redux';
import { connect } from 'react-redux';

export function mapStateToProps({ title }: State) {
    return { title };
}
export default connect(mapStateToProps)(Title);