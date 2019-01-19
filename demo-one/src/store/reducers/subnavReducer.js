import { CHANGE_SUBNAV } from '../actionTypes'

export default function changeSubnav(state="", action){
    switch (action.type) {
        case CHANGE_SUBNAV:
            return action.subnav
        default:
            return state
    }
}