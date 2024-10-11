const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // If you need CORS
const studentRoutes = require('./routes/studentRoutes'); // Ensure this path is correct

const app = express();

app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json());
app.use('/api', studentRoutes); // Mount student routes on the /api path

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
