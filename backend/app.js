require('dotenv').config();
const express = require('express');
const session = require('express-session')
const cookieParser = require('cookie-parser');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400000
    }
}));


app.use('/auth', require('./routes/authRouter'))

app.use('/task', require('./routes/taskRouter'))

app.use('/user', require('./routes/userRouter'))

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
})
