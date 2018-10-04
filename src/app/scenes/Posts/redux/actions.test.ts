import { Post } from './types';
import Actions from './actions';

describe('PostsAction', () => {
  describe('FetchPosts', () => {
    const action = Actions.FetchPosts();

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
  });

  describe('FetchPostsSuccess', () => {
    const posts: Post[] = [];
    const action = Actions.FetchPostsSuccess(posts);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
    it('has correct payload', () => {
      expect(action.payload).toEqual(posts);
    });
  });

  describe('FetchPostsFailure', () => {
    const error = 'some generic error';
    const action = Actions.FetchPostsFailure(error);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
    it('has correct error message', () => {
      expect(action.error).toEqual(error);
    });
  });

  describe('AddPost', () => {
    const post: Post = { id: undefined, title: 'some title', body: 'some text' };
    const action = Actions.AddPost(post);

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
    const action = Actions.NewPost(post);

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
