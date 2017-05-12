//add new event
export const add_event = (event) => {
    return {
        type: "ADD_EVENT",
        event
    };
};
//edit event
export const edit_event = (event) => {
    return {
        type: "EDIT_EVENT",
        event
    };
};
//delete event
export const del_event = (event) => {
    return {
        type: "DELETE_EVENT",
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