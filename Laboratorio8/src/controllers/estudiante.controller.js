const Estudiante = require('../models/estudiante.model');

exports.getEstudiantes = async (req, res, next) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        next(error);
    }
};

exports.createEstudiante = async (req, res, next) => {
    try {
        const estudiante = new Estudiante(req.body);
        const savedEstudiante = await estudiante.save();
        res.status(201).json(savedEstudiante);
    } catch (error) {
        next(error);
    }
};

exports.getEstudianteById = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id);
        if (!estudiante) {
            return res.status(404).json({ message: 'No se ha encontrado el estudiante' });
        }
        res.json(estudiante);
    } catch (error) {
        next(error);
    }
};

// Añade el resto de controladores...
// 6. Delete estudianteById
exports.deleteEstudianteById = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findByIdAndDelete(req.params.id);
        if (!estudiante) {
            return res.status(404).json({ message: 'No se ha encontrado el estudiante' });
        }
        res.json(estudiante);
    } catch (error) {
        next(error);
    }
};

// 7. Update estudiante
exports.updateEstudiante = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!estudiante) {
            return res.status(404).json({ message: 'No se ha encontrado el estudiante' });
        }
        
        res.json(estudiante);
    } catch (error) {
        next(error);
    }
};