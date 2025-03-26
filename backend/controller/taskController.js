const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.create = async(req, res) => {
    const { title, description, userId } = req.body;
    
    try {

        const userExists = await prisma.users.findUnique({ 
            where: { id: userId } 
        });
        
        if (userExists) {
            const newTask = await prisma.tasks.create({
                    data: {
                        title,
                        description,
                        status: 'PENDING',
                        userId
                    }
                }
            );
    
            return res.status(201).json(newTask);
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

    }catch (error) {
        return res.status(500).json({ error: 'Erro ao tentar criar uma nova task.'});
    }
};

exports.findAll = async(req, res) => {
    try {
        const tasks = await prisma.tasks.findMany();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao tentar buscar todas as tasks.'});
    }
};

exports.findById = async(req, res) => {
    const userId = req.params.id;
    try {
        const tasks = await prisma.tasks.findMany({
            where: { userId: parseInt(userId) }
        });

        if (tasks && tasks.length > 0) {
            return res.status(200).json(tasks);
        } else { 
            return res.status(404).json({ message: 'Nenhuma task encontrada para este usuário' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao tentar buscar uma task por id.'});
    }
};

exports.update = async(req, res) => {
    const { title, description, status } = req.body;
    const userId = parseInt(req.params.userId);
    const taskId = parseInt(req.params.taskId);

    try {
        const userExists = await prisma.users.findUnique({ 
            where: { id: userId } 
        });

        if(userExists) {
            const taskExists = await prisma.tasks.findFirst({
                where: { 
                    id: taskId,
                    userId: userId }
                });

            if (taskExists) {

                if (!title && !description && !status) {
                    return res.status(400).json({ 
                        message: 'Nenhum campo foi informado para atualização.' 
                    });
                }

                if (status && !['PENDING', 'INPROGRESS', 'COMPLETED'].includes(status)) {
                    return res.status(400).json({
                        message: 'Status inválido. Por favor, escolha entre PENDING, INPROGRESS ou COMPLETED.'
                        });
                }

                const updatedTask = await prisma.tasks.update({
                    where: { id: taskId },
                    data : { 
                        title: title || taskExists.title,  
                        description: description || taskExists.description, 
                        status: status || taskExists.status 
                    }
                });

                return res.status(200).json(updatedTask);

            } else {
                return res.status(404).json({ message: 'Task não encontrada ou não pertence ao usuário'});
            }

        } else {
            return res.status(404).json({ message: 'Usuário não encontrado'});
        }

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar task.'});
    }
};

exports.delete = async(req, res) => {
    const userId = parseInt(req.params.userId);
    const taskId = parseInt(req.params.taskId);

    try{
        const userExists = await prisma.users.findUnique({ 
            where: { id: userId } 
        });

        if (userExists) {
            const taskExists = await prisma.tasks.findFirst({
                where: { 
                    id: taskId,
                    userId: userId }
                });

            if (taskExists) {

                const deletedTask = await prisma.tasks.delete({
                    where: { id: taskId }
                });

                return res.status(200).json(deletedTask);
            } else {
                return res.status(404).json({ message: 'Task não encontrada ou não pertence ao usuário.'});
            }

        } else {
            return res.status(404).json({ message: 'Usuário não encontrado.'});
        }

    }catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir task.'});
    }
};