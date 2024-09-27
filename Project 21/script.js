const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

const expenses = [];

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  const newExpense = {
    id: Date.now(),
    desc: desc,
    amount: parseFloat(amount),
  };

  expenses.push(newExpense);

  updateList();
  updateTotalAmount();

  expenseForm.reset();
});

function updateList() {
  expenseList.innerHTML = "";

  expenses.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `Description: ${item.desc} <br /> Amount: ${item.amount}`;
    expenseList.appendChild(li);
  });
}

function updateTotalAmount() {
  const total = expenses.reduce((total, item) => total + item.amount, 0);
  totalAmount.textContent = `${total}`;
}
