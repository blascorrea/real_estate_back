const express = require("express");
const cors = require("cors");
const prisma = require("./models");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
