import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import Contact from './models/Contact.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Resolve paths for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public folder (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/engine_hub';
console.log('Connecting to MongoDB database...');

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully.'))
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
    console.log('⚠️ Running in offline database fallback mode.');
  });

// HTTP Template Routes

// 1. Homepage / Engine Dashboard
app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Engine Hub — Mutasim Billah', activePage: 'home' });
});

// 2. Systems Engine Console (replaces About Me)
app.get('/console', (req, res) => {
  res.render('console', { pageTitle: 'System Console — Mutasim Billah', activePage: 'console' });
});



// 4. Contact Portal
app.get('/contact', (req, res) => {
  res.render('contact', { pageTitle: 'Contact Engine — Mutasim Billah', activePage: 'contact' });
});

// 5. Technical Stack & Toolkit
app.get('/skills', (req, res) => {
  res.render('skills', { pageTitle: 'Technical Stack & Toolkit — Mutasim Billah', activePage: 'skills' });
});

// 6. System Architectural Experience
app.get('/experience', (req, res) => {
  res.render('experience', { pageTitle: 'System Architectural Experience — Mutasim Billah', activePage: 'experience' });
});

// 7. Production Ledgers & Verification Hub (Verifiable CV)
app.get('/verification', (req, res) => {
  res.render('verification', { pageTitle: 'Production Ledgers & Verification Hub — Mutasim Billah', activePage: 'verification' });
});

// 8. Certifications & Operations
app.get('/additional', (req, res) => {
  res.render('additional', { pageTitle: 'Certifications & Operations — Mutasim Billah', activePage: 'additional' });
});

// 9. Privacy Policy
app.get('/privacy', (req, res) => {
  res.render('privacy', { pageTitle: 'Privacy Policy — Mutasim Billah', activePage: 'privacy' });
});

// 10. Terms of Service
app.get('/terms', (req, res) => {
  res.render('terms', { pageTitle: 'Terms of Service — Mutasim Billah', activePage: 'terms' });
});

// API Routes

// 1. Core Engine Health & Telemetry API
app.get('/api/status', (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  const dbStates = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };

  res.json({
    status: 'ONLINE',
    engineName: 'Mutasim Architecture Engine v2.0',
    uptime: process.uptime(),
    timestamp: new Date(),
    database: {
      state: dbStates[dbStatus] || 'unknown',
      connected: dbStatus === 1
    },
    systemMetrics: {
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      activeThreads: 1
    }
  });
});

// 2. Secure Contact Form API with DB persistence
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required parameters: name, email, and message are mandatory.'
      });
    }

    // Capture requester analytics
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Check DB state. If connected, write to DB. If offline, log and respond success with fallback warning.
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({
        name,
        email,
        subject: subject || 'General Inquiry',
        message,
        ipAddress,
        userAgent
      });

      await newContact.save();
      console.log(`[DB SUCCESS] New message from ${name} (${email}) stored in MongoDB.`);
      
      return res.json({
        success: true,
        message: 'Message successfully ingested and secured in the engine database.',
        id: newContact._id
      });
    } else {
      console.log(`[FALLBACK SUCCESS] DB offline. Received message from ${name} (${email}): "${message}"`);
      return res.json({
        success: true,
        message: 'Message processed by local engine fallback. DB connection is offline.',
        fallback: true
      });
    }
  } catch (err) {
    console.error('[API ERROR] Contact Form Processing Error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to process message. Internal System Error: ' + err.message
    });
  }
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Mutasim Engine running at http://localhost:${PORT}`);
  console.log(`   Mode: ${process.env.NODE_ENV || 'development'}`);
  console.log(`==================================================\n`);
});
