import express, { Request, Response } from "express";
import cors from "cors";
import { json } from "body-parser";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req: Request, res: Response) => {
	res.send(`Whats 9 + 10?`);
});

app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT} ✨`);
});
