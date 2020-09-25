import { combineReducers } from "redux"
import { authReducer } from "./auth/reducer"
import { registrationReducer } from "./registration/reducer"
import { postsReducer } from "./posts/reducer"

export default combineReducers({
  authReducer,
  registrationReducer,
  postsReducer
})