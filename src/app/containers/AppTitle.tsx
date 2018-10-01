import { AppAction, State, selectors } from '@redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Title } from '../components/Title';

export function mapStateToProps(state: State) {
    return { title: selectors.getTitle(state) };
}
export function mapDispatchToProps(_dispatch: Dispatch<AppAction>) {
    return {};
}
export const AppTitle = connect(mapStateToProps, mapDispatchToProps)(Title);
export default AppTitle;