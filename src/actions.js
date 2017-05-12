import { } from './general/logic.js'

export const route = (path) => {
    return {
        type: "ROUTE",
        path
    };
};