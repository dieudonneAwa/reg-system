module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Todo, {
      foreignKey: 'user_id',
      as: 'users',
    });
  };

  return User;
};
