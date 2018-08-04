
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_input")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_input").insert([
        {
          userEmail: "jbiznee@gmail.com",
          password: "testbudget1",
          totalIncome: 2100,
          incomeInput: 50,
          incomeDate: "2018-07-20",
          incomeSource: "Side Job Cash",
          incomeNote: "DJing",
          expenseAmount: 720,
          expenseDate: "2018-08-01",
          expenseType: "Rent/Mortgage",
          expenseNote: ""
        },
        {
          userEmail: "1jeffreyburns@gmail.com",
          password: "testbudget2",
          totalIncome: 3000,
          incomeInput: 450,
          incomeDate: "2018-07-00",
          incomeSource: "Cash",
          incomeNote: "Weekly Check",
          expenseAmount: 109,
          expenseDate: "2018-08-03",
          expenseType: "Groceries",
          expenseNote: "amazon prime"
        },
        {
          userEmail: "jb@gmail.com",
          password: "testbudget3",
          totalIncome: 2000,
          incomeInput: 640,
          incomeDate: "2018-07-31",
          incomeSource: "Investment Income",
          incomeNote: "Returned Apt Deposit",
          expenseAmount: 25,
          expenseDate: "2018-08-02",
          expenseType: "Recreational",
          expenseNote: "drinks at bowmans"
        }
      ]);
    });
};

