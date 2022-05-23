import ExpensesSchema from "./Expenses.schema.js";

//CRUD

//@expense must be an object
export const crateExpense = expense => {
	return ExpensesSchema.create(expense);
};

//@filter must be an object, that should at least contains the userId
export const getExpenses = filter => {
	return ExpensesSchema.find(filter);
};

//@filter must be an object, that should at least contains the userId and the expenses id
export const deleteExpense = filter => {
	return ExpensesSchema.findOneAndDelete(filter);
};

export const deleteManyExpenses = (userId, itemIds) =>{
return ExpensesSchema.deleteMany({userId, _id: {$in: itemIds}});
}