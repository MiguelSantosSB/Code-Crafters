const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.create = async(req, res) => {
    const { title, description, userId } = req.body;
    
    try {

        const userExists = await prisma.users.findUnique({ 
            where: { id: userId } 
        });

        if (!userExists) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const newTask = prisma.tasks.create({
                data: {
                    title,
                    description,
                    userId
                }
            }
        );

        return res.status(201).json(newTask);

    }catch (error) {
        return res.status(500).json({ error: 'Erro ao tentar criar uma nova task.'});
    }
};

// exports.findAll = async(req, res) => {
//     try {

//     } catch (error) {
        
//     }
// }


