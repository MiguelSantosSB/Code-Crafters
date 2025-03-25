const { PrismaClient } = require('@prisma/client');
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


