import { combineEpics, Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, switchMap, delay } from 'rxjs/operators';
import { Types, Creators } from './actions';
import { PostsState } from './state';
import { Post } from './types';

import ActionType = Types.Type;

const AddPostEpic: Epic<ActionType, ActionType, PostsState> = (action$) =>
  action$.pipe(
    ofType(Types.ADD_POST),
    map((action: Types.AddPost) => ({ ...action, payload: { ...action.payload, id: +(new Date()) }})),
    map((action: Types.AddPost) => Creators.NewPost(action.payload)
  ));

const FetchPostsEpic: Epic<ActionType, ActionType, PostsState> = (action$) =>
  action$.pipe(
    ofType(Types.FETCH_POSTS),
    switchMap(() => 
      ajax.getJSON<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
        delay(500),
        map(posts => Creators.FetchPostsSuccess(posts)),
        catchError((error: AjaxError) => of(Creators.FetchPostsFailure(error.message)))
      )
    )
  );

export const PostsEpic = combineEpics(AddPostEpic, FetchPostsEpic);
export default PostsEpic;