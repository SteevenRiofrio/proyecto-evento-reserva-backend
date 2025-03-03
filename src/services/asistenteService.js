const { Asistente } = require('../models');

class AsistenteService {
  // Obtener todos los asistentes
  async getAllAsistentes() {
    return await Asistente.findAll();
  }

  // Obtener un asistente por ID
  async getAsistenteById(id) {
    return await Asistente.findByPk(id);
  }

  // Crear un nuevo asistente
  async createAsistente(asistenteData) {
    return await Asistente.create(asistenteData);
  }

  // Actualizar un asistente
  async updateAsistente(id, asistenteData) {
    const asistente = await Asistente.findByPk(id);
    if (!asistente) return null;

    return await asistente.update(asistenteData);
  }

  // Eliminar un asistente
  async deleteAsistente(id) {
    const asistente = await Asistente.findByPk(id);
    if (!asistente) return false;

    await asistente.destroy();
    return true;
  }
}

module.exports = new AsistenteService();