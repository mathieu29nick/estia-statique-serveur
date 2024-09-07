const studentRepository = require('../services/StudentRepository');

exports.getStudentById = async (req, res) => {
  try {
      const id = req.params.id;
      const email = req.params.email;
      const result = await studentRepository.getStudentById(id,email);
      if (!result.status) {
          return res.status(404).json(result);
      }
      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ status: false, message: error.message });
  }
};