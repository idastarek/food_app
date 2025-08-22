import express from "express";
import cors from "cors";
import clientRoute from "./routes/clientRoute";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', clientRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
