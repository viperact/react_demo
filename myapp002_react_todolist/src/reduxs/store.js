import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

// redux 라이브러리 설치
export const store = createStore(reducer); //npm install redux react-redux
