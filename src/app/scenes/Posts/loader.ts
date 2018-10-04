import Loader from '@app/components/ComponentLoader';

export const PostsLoader = Loader(() => import('./Posts'));
export default PostsLoader;