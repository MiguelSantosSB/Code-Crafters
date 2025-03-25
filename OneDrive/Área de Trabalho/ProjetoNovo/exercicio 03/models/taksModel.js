let tasks = [
    {id: 1, tittle: "estudar node", description: "estudar o ambiente node", status:"pendente"},
    {id: 2, tittle: "estudar node", description: "estudar o ambiente node", status:"pendente"},
    {id: 3, tittle: "estudar node", description: "estudar o ambiente node", status:"pendente"},
];
let id = 4;

const createTask = (title, description, status="pendente") => {
    tasks.push({id, title, description, status});
    id++;
}

const getAllTasks = () => {
    return tasks;
};

const getTaskById = (id) => {
    const task = task.find((task) => task.id === id);
    return task;
};

const UpdateTask = (id, title, description, status) => {
    const task = getTaskById(id);
    if (task) {
        task.title = title || task.title;
        task.description = description || task.description;
        task.status = status || task.status;
    }
};

const deleteTask = (id) => {
    const indexById = tasks.findIndex(task => task.id === id);
    
    if (indexById !== -1) {
        tasks.splice(indexById, 1); 
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    UpdateTask,
    deleteTask
}