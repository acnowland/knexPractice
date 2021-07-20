exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Sam", phase: 5 },
        { name: "Nick", phase: 2 },
        { name: "Adam", phase: 3 },
      ]);
    });
};
