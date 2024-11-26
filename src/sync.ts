import sequelize from './core/config/database';

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
