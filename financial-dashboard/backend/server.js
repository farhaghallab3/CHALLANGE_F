const express = require('express');
const bodyParser = require('body-parser');
const instrumentRoutes = require('./routes/instruments');
const app = express();

app.use(bodyParser.json());
app.use('/api/instruments', instrumentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
