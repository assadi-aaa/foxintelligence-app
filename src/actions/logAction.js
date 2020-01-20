export const logAction = (data) => dispatch => {
    dispatch({
        type: 'UPDATE_LOG_DATA',
        logData: data
    })
};
