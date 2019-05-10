import { createStore } from 'redux';

import reducer from './reducers/loginReducer';

const store = createStore(reducer);

export default store;