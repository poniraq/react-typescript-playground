import Loader from '@app/components/ComponentLoader';

export const TodoLoader = Loader({
  loader: () => import('./Todo')
});
export default TodoLoader;