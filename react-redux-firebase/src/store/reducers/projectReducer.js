const initState = {
    projects:[
        {id:'1', title:"hello",content:"blah blah balh"},
        {id:'2', title:"hello",content:"blah blah balh"},
        {id:'3', title:"hello",content:"blah blah balh"},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log(action.project)
            return state
        case "CREATE_PROJEC_ERROR":
            console.log(action.err)
            return state
        default:
            return state
    }
}

export default projectReducer