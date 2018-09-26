import { RootAction, RootState, selectors } from '@redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Title } from '../components/Title';

export function mapStateToProps(state: RootState) {
    return { title: selectors.getTitle(state) };
}
export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Title);