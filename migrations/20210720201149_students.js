exports.up = function (knex) {
  return knex.schema.createTable("students", (student) => {
    student.increments("id");
    student.string("name");
    student.integer("phase");
  });
};

//what runs during a rollback
exports.down = function (knex) {
  return knex.schema.dropTable("students");
};
