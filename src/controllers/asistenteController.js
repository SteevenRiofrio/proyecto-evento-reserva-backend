const asistenteService = require('../services/asistenteService');

class AsistenteController {
  // Obtener todos los asistentes
  async getAllAsistentes(req, res) {
    try {
      const asistentes = await asistenteService.getAllAsistentes();
      return res.status(200).json(asistentes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener un asistente por ID
  async getAsistenteById(req, res) {
    try {
      const { id } = req.params;
      const asistente = await asistenteService.getAsistenteById(id);
      
      if (!asistente) {
        return res.status(404).json({ message: 'Asistente no encontrado' });
      }
      
      return res.status(200).json(asistente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Crear un nuevo asistente
  async createAsistente(req, res) {
    try {
      const asistente = await asistenteService.createAsistente(req.body);
      return res.status(201).json(asistente);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Actualizar un asistente
  async updateAsistente(req, res) {
    try {
      const { id } = req.params;
      const asistente = await asistenteService.updateAsistente(id, req.body);
      
      if (!asistente) {
        return res.status(404).json({ message: 'Asistente no encontrado' });
      }
      
      return res.status(200).json(asistente);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Eliminar un asistente
  async deleteAsistente(req, res) {
    try {
      const { id } = req.params;
      const deleted = await asistenteService.deleteAsistente(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Asistente no encontrado' });
      }
      
      return res.status(200).json({ message: 'Asistente eliminado exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AsistenteController();