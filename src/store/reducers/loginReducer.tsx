const defaultState = {
    user: {}
}

const login = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        default:
            return state
    }
}

export default login;
