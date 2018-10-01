import { InjectEpic, InjectReducer } from '@redux';
import { Reducer, Epic } from './index';

InjectReducer('posts', Reducer);
InjectEpic(Epic);