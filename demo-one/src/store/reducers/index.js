import { combineReducers } from "redux"
import date from "./dateReducer"
import subnav from "./subnavReducer"

const rootReducer = combineReducers({
	date,
	subnav
})

export default rootReducer