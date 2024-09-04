const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const timeEntryERoutes = require('./routes/timeEntryRoutes');
const reportRoutes = require('./routes/reportRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employess', employeeRoutes);
app.use('/api/time-entries', timeEntryERoutes);
app.use('/api/reports', reportRoutes);

// Midleware de Erro
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Ò servidor rodando na porta ${PORT}`);
});
