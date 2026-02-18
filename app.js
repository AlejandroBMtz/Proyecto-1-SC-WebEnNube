const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Le decimos a Express que entregue el archivo HTML cuando alguien entre a la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});