import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authReducer";
import ajaxCallsInProgress from './ajaxStatusReducer';
import datePicker from './date';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  datePicker
});

export default rootReducer;
