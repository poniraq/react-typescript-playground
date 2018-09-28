import Loader from '@app/components/ComponentLoader';

export const PostsLoader = Loader({
  loader: () => import('./Posts')
});
export default PostsLoader;