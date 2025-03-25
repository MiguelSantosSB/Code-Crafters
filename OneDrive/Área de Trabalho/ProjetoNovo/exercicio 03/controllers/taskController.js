const taskModel = require("../model/taskModel");

exports.createTask = (req, res) => {
      const {title, description, status} = req.body;
      taskModel.createTask(title, description, status);
      res.status(201).json({message: "task created sucessfuly"})
};

exports.getAllTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();
    res.status(200).json(tasks);
};

exports.getTaskById = (req, res) => {
    const { id } = req.params;
    const task = taskModel.getTaskById(Number(id));
    if (task) {
        res.status(404).json({message: "task not found!"})
    }
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status} = req.body;
    taskModel.updateTask(Number(id, title, description, status));
    res.status(200).json({massage: "task updated!"});
};

exports.delateTask = (req, res) => {
    const { id } = req.params;
    taskModel.delateTask(Number(id));
    res.status(200).json({ message: "task deleted"})
};