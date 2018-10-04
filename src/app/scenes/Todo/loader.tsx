import Loader from '@app/components/ComponentLoader';

export const TodoLoader = Loader(() => import('./Todo'));
export default TodoLoader;