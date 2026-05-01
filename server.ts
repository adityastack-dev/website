import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(express.json());

const DB_FILE = path.join(process.cwd(), 'reservations.json');

// Ensure db exists
async function initDb() {
  try {
    await fs.access(DB_FILE);
  } catch {
    await fs.writeFile(DB_FILE, JSON.stringify([]));
  }
}

initDb();

// --- API ROUTES ---
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/reservations", async (req, res) => {
  try {
    const data = await fs.readFile(DB_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: "Failed to read reservations" });
  }
});

app.post("/api/reservations", async (req, res) => {
  try {
    const data = await fs.readFile(DB_FILE, 'utf-8');
    const reservations = JSON.parse(data);
    
    // Create new reservation
    const newReservation = {
      id: crypto.randomUUID(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    reservations.push(newReservation);
    await fs.writeFile(DB_FILE, JSON.stringify(reservations, null, 2));
    
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: "Failed to create reservation" });
  }
});

// --- VITE MIDDLEWARE ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // For Express 4 and 5 compatibility in SPA fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
