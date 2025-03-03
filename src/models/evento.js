'use strict';
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lugar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    tableName: 'eventos',
    timestamps: true
  });

  Evento.associate = function(models) {
    Evento.hasMany(models.Reserva, {
      foreignKey: 'eventoId',
      as: 'reservas'
    });
  };

  return Evento;
};