import * as types from './actionsTypes';
import axios from 'axios';
import moment from 'moment';

export function loadEventsSuccess(events) {
    return {type: types.LOAD_EVENTS_SUCCESS, events};
}

export function loadEvents(startDate, endDate) {
    return function(dispatch) {
        debugger;
        axios({
            method: 'post',
            url: 'http://9cd7b1d6.ngrok.io/api/GetEvents',
            data: {
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD")
            }
        }).then(function (response) {
            debugger;
            dispatch(loadEventsSuccess(response.data.result))
        })
        .catch(function (error) {
            console.log(error);
        });
    };
}
