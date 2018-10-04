import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { Actions } from './actions';
import { ActionType, Post, PostsEpic as EpicType } from './types';


const AddPostEpic: EpicType = (action$) =>
  action$.pipe(
    ofType(ActionType.ADD_POST),
    map((action: ActionType.AddPost) => ({ ...action, payload: { ...action.payload, id: +(new Date()) }})),
    map((action: ActionType.AddPost) => Actions.NewPost(action.payload)
  ));

const FetchPostsEpic: EpicType = (action$) =>
  action$.pipe(
    ofType(ActionType.FETCH_POSTS),
    switchMap(() => 
      ajax.getJSON<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
        delay(500),
        map(posts => Actions.FetchPostsSuccess(posts)),
        catchError((error: AjaxError) => of(Actions.FetchPostsFailure(error.message)))
      )
    )
  );

export type PostsEpic = EpicType;
export const PostsEpic = combineEpics(AddPostEpic, FetchPostsEpic);
export default PostsEpic;