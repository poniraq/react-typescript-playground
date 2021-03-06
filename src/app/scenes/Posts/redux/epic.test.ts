import { ActionsObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { ActionType, Post } from './types';
import { Actions } from './actions';
import { PostsEpic } from './epic';

const post: Post = { id: undefined, title: 'some_title', body: 'some_body' };

describe('PostsEpic', () => {
  describe('AddPostEpic', () => {
    const action$ = new ActionsObservable(of(Actions.AddPost(post)));
    const epic = PostsEpic(action$, {} as any, {});

    it('emits NEW_POST action', (done) => {
      epic.subscribe((action: ActionType.NewPost) => {
        expect(action.type).toEqual(ActionType.NEW_POST);
        done();
      });
    });

    it('emits with correct payload', (done) => {
      epic.subscribe((action: ActionType.NewPost) => {
        expect(action.payload.title).toEqual(post.title);
        expect(action.payload.body).toEqual(post.body);
        done();
      });
    });

    it('adds "id" to the post', (done) => {
      epic.subscribe((action: ActionType.NewPost) => {
        expect(post.id).toBeUndefined();
        expect(action.payload.id).toBeDefined();
        done();
      });
    });
  });

  describe('FetchPostsEpic', () => {
    const errorMessage = 'some_error_message';
    const action$ = new ActionsObservable(of(Actions.FetchPosts()));
    const epic = PostsEpic(action$, {} as any, {});

    describe('on success', () => {
      beforeEach(() => {
        spyOn(ajax, 'getJSON').and.callFake(() => of([ post ]));
      });

      it('emits FETCH_POSTS_SUCCESS', (done) => {
        epic.subscribe(action => {
          expect(action.type).toEqual(ActionType.FETCH_POSTS_SUCCESS);
          done();
        });
      });

      it('calls ajax.getJSON', (done) => {
        epic.subscribe(_action => {
          expect(ajax.getJSON).toHaveBeenCalledTimes(1);
          done();
        });
      });
  
      it('does not mutate data', (done) => {
        epic.subscribe((action: ActionType.FetchPostsSuccess) => {
          expect(action.payload).toEqual([ post ]);
          done();
        });
      });
    });

    describe('on failure', () => {
      beforeEach(() => {
        spyOn(ajax, 'getJSON').and.callFake(() => new Observable(() => { throw new Error(errorMessage); }));
      });

      it('emits FETCH_POSTS_FAILURE', (done) => {
        epic.subscribe(action => {
          expect(action.type).toEqual(ActionType.FETCH_POSTS_FAILURE);
          done();
        });
      });
  
      it('has error message in payload', (done) => {
        epic.subscribe((action: ActionType.FetchPostsFailure) => {
          expect(action).toHaveProperty('error');
          expect(action.error).toEqual(errorMessage);
          done();
        });
      });
  
      it('calls ajax.getJSON', (done) => {
        epic.subscribe(_action => {
          expect(ajax.getJSON).toHaveBeenCalledTimes(1);
          done();
        });
      });
    });
  });
});
