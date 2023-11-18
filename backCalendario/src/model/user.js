const mongoose = require("../database");

const UseSchema = new mongoose.Schema({
  project: {
    type: Object,

    nameProject:{
        type:String,
        require:true,
    },

    squad: {
      type: Object,
      
      nameSquad:{
        type:String,
        require: true,
      },
      
      namesCollaborators: {
        type: Object,
        nameCollaborator:{
            type:String,
            require:true, 
        },
        imgCollaborator:{
            type:String,
            require:true,
        }
      },
    },
  },

  task: {
    tipe: Object,
    nameTask: {
      type: String,
      require: true,
    },
    nameColla: {
      type: String,
      require: true,
    },
    dateTask: {
      type: Date,
      default: Date.now,
    },
  },
});

const User = mongoose.model("User", UseSchema);
module.exports = User;
