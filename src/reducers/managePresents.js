export function managePresents(state, action){
}


managePresents = (prevState, action) => {
    switch(action.type) {
        case 'INCREASE':
            return {numberOfPresents: prevState.numberOfPresents + 1}

        default: 
            return prevState
    }
    

}