const defaultState = {
    user: {}
}

const logout = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                user: undefined
            }
        default:
            return state
    }
}

export default logout;
