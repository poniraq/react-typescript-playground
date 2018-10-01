import { InjectReducer, InjectEpic } from '@redux';
import { Reducer, Epic } from './index';

InjectReducer('todo', Reducer);
InjectEpic(Epic);