import { combineEpics, Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostsAction } from './actions';
import { PostsState } from './state';
import { Post } from './types';

import ActionType = PostsAction.Type;

const AddPostEpic: Epic<ActionType, ActionType, PostsState> = (action$) =>
  action$.pipe(
    ofType(PostsAction.ADD_POST),
    map((action: PostsAction.AddPost): PostsAction.NewPost => ({
      type: PostsAction.NEW_POST,
      payload: action.payload
    })
  ));

const FetchPostsEpic: Epic<ActionType, ActionType, PostsState> = (action$) =>
  action$.pipe(
    ofType(PostsAction.FETCH_POSTS),
    switchMap(() => 
      ajax('https://jsonplaceholder.typicode.com/posts').pipe(
        map((response: AjaxResponse) => response.response),
        map((data: Post[]): PostsAction.FetchPostsSuccess => PostsAction.FetchPostsSuccess(data)),
        catchError((error: AjaxError) => of(PostsAction.FetchPostsFailure(error.message)))
      )
    )
  );

export const PostsEpic = combineEpics(AddPostEpic, FetchPostsEpic);