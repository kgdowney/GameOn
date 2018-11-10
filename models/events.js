module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventName: DataTypes.STRING,
    plannedBy: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventTime: DataTypes.TIME,
    eventLocationName: DataTypes.STRING,
    gameName: DataTypes.STRING,
    attendees: DataTypes.STRING
  });
  return Event;
};
