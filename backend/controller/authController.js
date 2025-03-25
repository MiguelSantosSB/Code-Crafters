const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword, comparePassword } = require('../utils/bcryptUtils');

exports.register = async(req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await prisma.users.findUnique({ where: { email } });
        if(userExists) {
            return res.status(400).json({ message: 'Email já cadastrado.' });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await prisma.users.create({
            data: {
                username,
                email,
                password: hashedPassword
            },
        });

        req.session.userId = newUser.id;

        res.status(201).json(newUser);
    } catch(error) {
        res.status(500).jason({ error: 'Erro interno do servidor.' });
    } 
};

exports.login = async(req, res) => {
    const { email, password } = req.body;

    try{
        const user = await prisma.users.findUnique({ where: { email } });
        if(!user) {
            return res.status(401).json({ message: 'Email não encontrado.' });
        }

        const isMatch = await comparePassword(password, user.password);
        if(!isMatch) {
            return res.status(401).json({ message: 'Senha inválida.' });
        }

        req.session.userId = user.id;

        res.json({
            id: user.id,
            username: user.username,
            email: user.email 
        });

    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

exports.logout = async(req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao sair.' });
        }
        res.clearCookie('connect.sid');
        res.json({ message: 'Sessão encerrada com sucesso.' });
    });
};
