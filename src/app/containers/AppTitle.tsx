import { Title } from '../components/Title';
import { RootState, selectors } from '@redux';
import { connect } from 'react-redux';

export function mapStateToProps(state: RootState) {
    return { title: selectors.getTitle(state) };
}
export default connect(mapStateToProps)(Title);