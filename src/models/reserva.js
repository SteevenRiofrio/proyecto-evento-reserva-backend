'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {
    eventoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'eventos',
        key: 'id'
      }
    },
    asistenteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asistentes',
        key: 'id'
      }
    },
    fecha_reserva: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'reservas',
    timestamps: true
  });

  Reserva.associate = function(models) {
    Reserva.belongsTo(models.Evento, {
      foreignKey: 'eventoId',
      as: 'evento'
    });
    Reserva.belongsTo(models.Asistente, {
      foreignKey: 'asistenteId',
      as: 'asistente'
    });
  };

  return Reserva;
};