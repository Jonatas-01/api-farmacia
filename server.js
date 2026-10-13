const app = require("./app");
const db = require("./config/db");

const PORT = process.env.PORT || 3000;

// Testa a conexão ao iniciar (a API sobe mesmo assim e responde 503 se o banco cair)
db.getConnection((err, connection) => {
    if (err) {
        console.error(
            "Não foi possível conectar ao banco:",
            err.code,
            "-",
            err.message,
        );
    } else {
        console.log("Conectado ao banco de dados farmacia");
        connection.release();
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
