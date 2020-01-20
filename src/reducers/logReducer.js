export default (state = {
    logData: {},
}, action) => {
    switch (action.type) {
        case 'UPDATE_LOG_DATA':
            return {
                ...state,
                logData: action.logData
            };
        default:
            return state
    }
}
