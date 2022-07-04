import axios from "axios";
import { addCallDataReducer } from "../reducers/addCallData";

export const fetchData = (urlDates: any): any => {
    return async (dispatch: any) => {
        const response = await axios.post(
            `https://api.skilla.ru/mango/getList?date_start=${urlDates[0]}&date_end=${urlDates[1]}`,
            null,
            {
                headers: {
                    Authorization: "Bearer testtoken",
                },
            }
        );
        dispatch(addCallDataReducer(response.data.results));
    };
};
