import sequelize from './config/database'; // Adjust path if necessary

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
