const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const allocationRoutes = require('./routes/allocation');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/api', allocationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
