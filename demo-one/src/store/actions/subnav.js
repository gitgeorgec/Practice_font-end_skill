import { CHANGE_SUBNAV } from '../actionTypes'

export function changeSubnav(subnav){
    return {
        type: CHANGE_SUBNAV,
        subnav
    }
}