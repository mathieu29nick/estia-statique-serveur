var { Student } = require("../models/Student");
var configuraation = require('../configuration/SECRET');
const mongoose = require('mongoose');
var ObjectID = require("mongoose").Types.ObjectId;


exports.getStudentById = async (etu) => {
  try {
      const student = await Student.findOne({ numETU: etu });
      if (!student) {
          return { status: false, data: 'Étudiant non trouvé!' };
      }
      return { status: true, data: student };
  } catch (error) {
      throw new Error('Étudiant non trouvé!');
  }
};
