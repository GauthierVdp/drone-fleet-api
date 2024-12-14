import sequelize from './core/config/database';
import Drone from './data/models/drone';
import Fleet from './data/models/fleet';
import Mission from './data/models/mission';
import Pilot from './data/models/pilot';


Drone.initModel(sequelize);
Fleet.initModel(sequelize);
Mission.initModel(sequelize);
Pilot.initModel(sequelize);

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
