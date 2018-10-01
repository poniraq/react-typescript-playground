import { Post } from '../types';
import Creators from './creators';

describe('PostsAction', () => {
  describe('FetchPosts', () => {
    const action = Creators.FetchPosts();

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
  });

  describe('FetchPostsSuccess', () => {
    const posts: Post[] = [];
    const action = Creators.FetchPostsSuccess(posts);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
    it('has correct payload', () => {
      expect(action.payload).toEqual(posts);
    });
  });

  describe('FetchPostsFailure', () => {
    const error = 'some generic error';
    const action = Creators.FetchPostsFailure(error);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
    it('has correct error message', () => {
      expect(action.error).toEqual(error);
    });
  });

  describe('AddPost', () => {
    const post: Post = { id: undefined, title: 'some title', body: 'some text' };
    const action = Creators.AddPost(post);

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
    const action = Creators.NewPost(post);

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
