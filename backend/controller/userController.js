const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../utils/bcryptUtils');
const prisma = new PrismaClient();

exports.create = async(req, res) => {
    const { username, email, password } = req.body;

    try {

        const newUser = await prisma.users.create({
            data: {
                username,
                email,
                password
            }
        });

        return res.status(201).json(newUser);

    }catch (error) {
        return res.status(500).json({ message: 'Error creating user' });
    }
};

exports.findAll = async(req, res) => {
    try {
        const users = await prisma.users.findMany({
            include: { tasks: true}
        });
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching users' });
    }
};

exports.findById = async(req, res) => {
    const id = req.params.id
    
    try {
        const userExists = await prisma.users.findUnique({ 
            where: { id: parseInt(id) }
    });
        if (userExists) {
            return res.status(200).json(userExists);
        } else {
            return res.status(400).json({ message: 'Este usuario não existe' });
        } 
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching user' });
    }
};

exports.update = async(req, res) => {
    const { username, email, password } = req.body;
    const id = req.params.id;

    try {
        const userExists = await prisma.users.findUnique({ where: { id: parseInt(id) } });

        if(userExists) {
            
            const hashedPassword = await hashPassword(password);
            const userUpdate = await prisma.users.update({
                where: { id: parseInt(Number(id)) },
                data: { username, email, password: hashedPassword },
                include: { tasks: true }
            });

            return res.status(200).json(userUpdate);
        } else {
            return res.status(400).json({ message: 'Este usuario não existe' });
        }

     
    } catch (error) {
        return res.status(500).json({ message: 'Error updating user' });
    }
};

exports.delete = async(req, res) => {
    const id = req.params.id;

    try {
        const userExists = await prisma.users.findUnique({ where: { id: parseInt(Number(id)) } });
        if(!userExists) {
            return res.status(400).json({ message: 'Este usuario não existe' });
        }

        const userDelete = await prisma.users.delete({ 
            where: { id: parseInt(Number(id)) },
            include: { tasks: true }
        });

        return res.status(200).json(userDelete);
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting user' });
    }
}