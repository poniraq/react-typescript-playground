import { Field } from '@app/components/Field';
import { State } from '@redux';
import { setTitle, TitleAction } from '@redux/title/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ title }: State) {
    return { title };
}
export function mapDispatchToProps(dispatch: Dispatch<TitleAction>) {
  return {
    onChange: (title: string) => dispatch(setTitle(title)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Field);