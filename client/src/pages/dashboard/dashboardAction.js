import { deleteExpense, getExpense, postExpense } from "../../helpers/axiosHelper";
import {requestPending,setResponse, setExpenses } from "./dashboardSlice";

export const fetchExpenses =  () => async dispatch => {
    dispatch(requestPending());
    const {status, expenses} = await getExpense();

    status === "success" && dispatch(setExpenses(expenses))
    
};

export const handleOnPost =  frmDt => async dispatch => {
    dispatch(requestPending());
    const data = await postExpense(frmDt);
  
    dispatch(setResponse(data));
    data.status === "success" && dispatch(fetchExpenses());
};

export const handleOnDeleteExpenses =  ids => async dispatch => {
    dispatch(requestPending());
    const data = await deleteExpense(ids);

    dispatch(setResponse(data));
    data.status === "success" && dispatch(fetchExpenses());
     
}

     

 