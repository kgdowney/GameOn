module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventTime: DataTypes.TIME,
    eventLocationName: DataTypes.STRING,
    gameName: DataTypes.STRING
  });
  return Event;
};
