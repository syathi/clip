
exports.up = function(knex, Promise) {
  return knex.schema.hasTable('wall').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('wall', function(t) {
        t.increments('id').primary();
        t.string('user');
        t.string('gim');
        t.string('problem_name');
        t.string('grade');
        t.string('desciption');
        t.string('comments');
      });
    }else{
       return new Error("The table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('wall').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('wall');
    }
  });
};
