import { PostsAction } from './actions';
import { Post } from './types';

describe('PostsAction', () => {
  describe('FetchPosts', () => {
    const action = PostsAction.FetchPosts();

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
  });

  describe('FetchPostsSuccess', () => {
    const posts: Post[] = [];
    const action = PostsAction.FetchPostsSuccess(posts);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
    it('has correct payload', () => {
      expect(action.payload).toEqual(posts);
    });
  });

  describe('FetchPostsFailure', () => {
    const error = 'some generic error';
    const action = PostsAction.FetchPostsFailure(error);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
    it('has correct error message', () => {
      expect(action.error).toEqual(error);
    });
  });

  describe('AddPost', () => {
    const post: Post = { id: undefined, title: 'some title', body: 'some text' };
    const action = PostsAction.AddPost(post);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('has correct payload content', () => {
      const result = action.payload;

      expect(result.id).toEqual(post.id);
      expect(result.title).toEqual(post.title);
      expect(result.body).toEqual(post.body);
    });

    it('doesnt add "id" to payload', () => {
      const result = action.payload;

      expect(post.id).toBeUndefined();
      expect(result.id).toBeUndefined();
    });
  });

  describe('NewPost', () => {
    const post: Post = { id: undefined, title: 'some title', body: 'some text' };
    const action = PostsAction.NewPost(post);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('has correct payload content', () => {
      const result = action.payload;

      expect(result.id).toEqual(post.id);
      expect(result.title).toEqual(post.title);
      expect(result.body).toEqual(post.body);
    });

    it('doesnt add "id" to payload', () => {
      const result = action.payload;

      expect(post.id).toBeUndefined();
      expect(result.id).toBeUndefined();
    });
  });
});
