const studentRepository = require('../services/StudentRepository');

exports.getStudentById = async (req, res) => {
  try {
      const id = req.params.id;
      const result = await studentRepository.getStudentById(id);
      if (!result.status) {
          return res.status(404).json(result);
      }
      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ status: false, message: error.message });
  }
};