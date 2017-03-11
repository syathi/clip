
exports.up = function(knex, Promise) {
  return knex.schema.hasTable('climb_log').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('climb_log', function(t) {
        t.increments('id').primary();
        t.string('user')
        t.string('area');
        t.string('problem_name');
        t.string('grade');
        t.integer('attempt');
        t.boolean('isclear');
        t.string('comments');
      });
    }else{
       return new Error("The table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('climb_log').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('climb_log');
    }
  });
};
