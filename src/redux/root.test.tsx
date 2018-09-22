import * as root from './root';

describe('Redux#root', () => {
  it('loads without error', () => {
    expect(root).toBeDefined();
  });
  
  it('has RootEpic', () => {
    expect(root).toHaveProperty('RootEpic');
  });

  it('has RootReducer', () => {
    expect(root).toHaveProperty('RootReducer');
  });

  describe('selectors', () => {
    const title = 'some_title';
    const selectors = root.selectors;

    it('is defined', () => {
      expect(root).toHaveProperty('selectors');
    });

    it('has getTitle', () => {
      expect(selectors.getTitle({ title } as any)).toEqual(title);
    });

    it('has getNewPost', () => {
      const posts = { newPost: { title }};

      expect(selectors.getNewPost({ posts } as any).title).toEqual(title);
    });

    it('has getPosts', () => {
      const posts = { posts: [{ title }]};

      expect(selectors.getPosts({ posts } as any)).toEqual(posts.posts);
    });

    it('has getPostsError', () => {
      const posts = { error: 'some_error' };

      expect(selectors.getPostsError({ posts } as any)).toEqual(posts.error);
    });

    it('has getPostsFetching', () => {
      const posts = { fetching: true };

      expect(selectors.getPostsFetching({ posts } as any)).toEqual(posts.fetching);
    });
  });
});