import {createStore, Store} from 'redux';
import {createWrapper, Context, MakeStore} from 'next-redux-wrapper';
import { RootState, reducer } from './reducers';

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});