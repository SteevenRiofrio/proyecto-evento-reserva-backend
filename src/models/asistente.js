'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asistente = sequelize.define('Asistente', {
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  }, {
    tableName: 'asistentes',
    timestamps: true
  });

  Asistente.associate = function(models) {
    Asistente.hasMany(models.Reserva, {
      foreignKey: 'asistenteId',
      as: 'reservas'
    });
  };

  return Asistente;
};