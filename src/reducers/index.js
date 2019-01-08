import { combineReducers } from 'redux'
import { isLoadingReducer } from './isLoadingReducer'
import { hasErroredReducer } from './hasErroredReducer'
import { housesReducer } from './housesReducer'

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  error: hasErroredReducer,
  houses: housesReducer
})

export default rootReducer;