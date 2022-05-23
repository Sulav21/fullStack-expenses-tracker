import React, { useEffect, useState } from "react";
import { Alert, Button, Form, ListGroup, Spinner,ButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExpenses,
  handleOnDeleteExpenses,
} from "../../pages/dashboard/dashboardAction";

export const CustomTable = () => {
  const dispatch = useDispatch();
  const { expenses, res } = useSelector((state) => state.dashboard);
  const [ids, setIds] = useState([]);
  const [display, setDisplay] = useState("all")

  useEffect(() => {
    dispatch(fetchExpenses());
    res.status === "success" && setIds([]);
  }, [res]);

  const handleOnDelete = async (ids) => {
    if (!window.confirm("Are you sure you want to delete this expense?"))
      return;

    dispatch(handleOnDeleteExpenses(ids));
  };

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;

    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((id) => id !== value));
  };

  const incomeArg = expenses.filter(expense=>expense.type==='income')
  const expenseArg = expenses.filter(expense=>expense.type==='expenses')

const transactions = {

	"all":expenses,
	"income":incomeArg,
	"expenses":expenseArg
}


  return (
    <div className="mt-5 custom-list fs-3">
      <div className="btn-group pb-3 mb-3">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={()=>setDisplay("all")} variant="primary">All</Button>
          <Button onClick={()=>setDisplay("income")} variant="info">Income</Button>
          <Button onClick={()=>setDisplay("expenses")} variant="danger">Expenses</Button>
        </ButtonGroup>
      </div>

      <ListGroup>
        {transactions[display].map((item, i) => (
          <ListGroup.Item key={item._id} className="fw-bold">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                onClick={handleOnSelect}
                value={item._id}
                type="checkbox"
                label={item.name}
              />
            </Form.Group>

            <span className="cost">
              {item.type === "expenses" ? "-" : ""}${item.amount}{" "}
              <Button
                variant="danger"
                onClick={() => handleOnDelete([item._id])}
              >
                <i class="fa-solid fa-trash"></i>
              </Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="mt-2 text-end">
        {ids.length > 0 && (
          <Button variant="danger" onClick={() => handleOnDelete(ids)}>
            Delete Selected Expenses
          </Button>
        )}
      </div>
    </div>
  );
};
