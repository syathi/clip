
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {user: "taro",   password: "taropass", onsight: "4Q", redpoint: "3Q", home: "ロッキー"},
        {user: "jiro",   password: "jiropass", onsight: "2Q", redpoint: "1D", home: "Apex"},
        {user: "saburo", password: "sabupass", onsight: "1D", redpoint: "1D", home: "pump1"}
      ]);
    });
};
