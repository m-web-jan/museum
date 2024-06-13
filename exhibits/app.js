import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "museum",
  password: "",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

app.get("/data", (req, res) => {
  const language = req.query.language;
  const sql = `SELECT * FROM exhibits WHERE language = "${language}"`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

let dbAdmin;
app.get("/admin", (req, res) => {
  const login = req.query.login;
  const password = req.query.password;
  dbAdmin = mysql.createConnection({
    host: "localhost",
    user: login,
    database: "museum",
    password: password,
  });

  dbAdmin.connect((err) => {
    if (err) {
      return res.status(401).json({ error: "Неправильный логин или пароль" });
    }
    console.log("Connected to database");
  });

  const sql = `SELECT * FROM exhibits`;
  dbAdmin.query(sql, (err, result) => {
    if (err) {
      return res.status(401).json({ error: "Ошибка выполнения запроса" });
    }
    res.json(result);
  });
});

app.get("/admin/delete", (req, res) => {
  const id = req.query.id;
  const sql = `DELETE FROM exhibits WHERE id = '${id}'`;

  dbAdmin.query(sql, (err, result) => {
    if (err) {
      return res.status(401).json({ error: "Ошибка выполнения запроса" });
    }
    res.json(result);
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});

app.post('/addItem', (req, res) => {
  const { name, description, fileName, century, material, sizes, language } = req.body;
  const sql = `INSERT INTO exhibits (name, description, image, properties, language) VALUES ('${name}', '${description}', '${fileName}', '["${century}", "${material}", "${sizes}"]', '${language}')`;

  dbAdmin.query(sql, (err, result) => {
    if (err) {
      return res.status(401).json({ error: "Ошибка выполнения запроса" });
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
