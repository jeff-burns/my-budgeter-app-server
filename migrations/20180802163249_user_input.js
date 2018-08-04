exports.up = function(knex, Promise) {
    return knex.schema.createTable("user_input", table => {
      table.string("userEmail");
      table.string("password");
      table.integer("totalIncome");
      table.integer("incomeInput");
      table.string("incomeDate");
      table.string("incomeSource");
      table.string("incomeNote");
      table.integer("expenseAmount");
      table.string("expenseDate");
      table.string("expenseType");
      table.string("expenseNote");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("user_input");
  };
  
