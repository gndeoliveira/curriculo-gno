const app = require('./config/server')

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Servidor online na porta: ' + port))