import { } from './general/logic.js'

//add new event
export const add_event = (event) => {
    return {
        type: "ADD_EVENT",
        event
    };
};
//event to edit
export const event_to_edit = (event) => {
    return {
        type: "EVENT_EDIT",
        event
    };
};