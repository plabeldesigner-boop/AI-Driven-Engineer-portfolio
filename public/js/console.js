/* --- Systems Engine Console Interactivity --- */

// 1. Simulated Uptime Clock
let seconds = 0;
function updateClock() {
  seconds++;
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  const clockEl = document.getElementById('uptime-clock');
  if (clockEl) {
    clockEl.textContent = `${hrs}:${mins}:${secs}`;
  }
}
setInterval(updateClock, 1000);

// 2. Simulated Terminal Typer
const logs = [
  { text: "BASH: Initializing mutasim_engine_init.sh...", type: "info" },
  { text: "BOOT: Resolving system host parameters... OK", type: "success" },
  { text: "BOOT: Loading environment variables via config/env.js... SECURE", type: "success" },
  { text: "NET: Initializing Express 5.1.0 server on PORT 3000...", type: "info" },
  { text: "DB: Attending connection to MONGODB_URI cluster...", type: "info" },
  { text: "DB: Mongoose 8.19.1 connection established successfully.", type: "success" },
  { text: "SOCKET: Instantiating Socket.IO listener on server namespaces...", type: "info" },
  { text: "SOCKET: Namespaces /admin and /user are now LISTENING.", type: "success" },
  { text: "SECURE: Encrypted vault keys injected into secure memory buffer.", type: "success" },
  { text: "SECURE: FLAG_SECURE overlay shield enabled for sensitive routes.", type: "success" },
  { text: "CRON: Initializing Cloudflare R2 24-hour preview cleaner job...", type: "info" },
  { text: "CRON: Cleanup interval registered. Next scan in 30 minutes.", type: "success" },
  { text: "SYSTEM: Mutasim Systems Engine Boot Complete. STATUS: ONLINE.", type: "success" }
];

let logIndex = 0;
function typeLog() {
  const terminal = document.getElementById('console-terminal');
  if (!terminal || logIndex >= logs.length) return;

  const log = logs[logIndex];
  const line = document.createElement('div');
  line.className = `terminal-line ${log.type}`;
  line.textContent = `[${new Date().toLocaleTimeString()}] ${log.text}`;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;

  logIndex++;
  setTimeout(typeLog, Math.random() * 800 + 400);
}

// Start terminal typing on load
window.addEventListener('DOMContentLoaded', () => {
  typeLog();
});

// 3. Dynamic Subsystems Workspace Content Ingestion
const workspaces = {
  webmonoliths: {
    tag: "SYS-01",
    title: "Systems Architecture & Web Monoliths Workspace",
    content: `
      <p class="ws-intro">
        Engineering monolithic Node.js / Express backend servers. Focused on server-side rendering, session architectures, bidirectional Socket.IO links, and robust e-commerce payment rails.
      </p>

      <div class="ws-grid">
        <div class="ws-block">
          <h4>Subsystem Features</h4>
          <ul class="ws-list">
            <li><i class="fa-solid fa-check"></i> <strong>Node.js Monoliths:</strong> Express 5.x ESM architecture with MongoDB/Mongoose layer.</li>
            <li><i class="fa-solid fa-check"></i> <strong>Bidirectional Channels:</strong> Socket.IO real-time channels with status updates (e.g. read receipts, blue ticks).</li>
            <li><i class="fa-solid fa-check"></i> <strong>Video Skips Blocker:</strong> Interactive LMS trackers preventing students from skipping video logs.</li>
            <li><i class="fa-solid fa-check"></i> <strong>PDFKit Generator:</strong> Dynamically rendering academic certificate files upon curriculum completions.</li>
          </ul>
        </div>

        <div class="ws-block">
          <h4>Core Technology Stack</h4>
          <ul class="ws-list">
            <li><strong>Engine:</strong> Node.js, Express.js (ESM Module type)</li>
            <li><strong>Database:</strong> MongoDB Atlas via Mongoose ORM</li>
            <li><strong>Realtime Layer:</strong> Socket.io WebSockets</li>
            <li><strong>Integrations:</strong> Stripe Elements billing SDK, PDFKit, Mail Transport</li>
          </ul>
        </div>
      </div>

      <div class="ws-code-container">
        <div class="ws-code-header">
          <span>server.js (Rendolt Boot Lifecycle)</span>
          <button class="ws-copy-btn" onclick="copyCode('code-web')">Copy Code</button>
        </div>
        <div class="ws-code-body">
          <pre><code id="code-web">// Boot lifecycle of Rendolt Monolith
import './config/env.js'; // Validate environment
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDatabase from './config/database.js';
import setupMiddleware from './middleware/index.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

await connectDatabase(); // Mongoose connection
setupMiddleware(app); // BodyParser, Sessions, passport
setupSockets(io); // Attach listeners
app.set('io', io); // Expose to controllers

httpServer.listen(5000, () => console.log('Rendolt Core Running on Port 5000'));</code></pre>
        </div>
      </div>
    `
  },
  mobile: {
    tag: "SYS-02",
    title: "Advanced Mobile Engineering Workspace",
    content: `
      <p class="ws-intro">
        Developing native-performing applications for Android and iOS using Flutter and React Native. Specializing in state tracking providers, JWT biometric auths, and Groq-powered AI pipeline bindings.
      </p>

      <div class="ws-grid">
        <div class="ws-block">
          <h4>Subsystem Features</h4>
          <ul class="ws-list">
            <li><i class="fa-solid fa-check"></i> <strong>Flutter State Providers:</strong> Provider/Riverpod state binding in ATS scanners (Craft CV AI).</li>
            <li><i class="fa-solid fa-check"></i> <strong>Expo Mobile Companion:</strong> React Native integrations connecting to remote databases (Pulse AI).</li>
            <li><i class="fa-solid fa-check"></i> <strong>AI Commit Pipelines:</strong> Groq natural language parser converting chat commands to commits.</li>
            <li><i class="fa-solid fa-check"></i> <strong>Biometric Access:</strong> local_auth key release setups.</li>
          </ul>
        </div>

        <div class="ws-block">
          <h4>Core Technology Stack</h4>
          <ul class="ws-list">
            <li><strong>Mobile Code:</strong> Flutter (Dart), React Native (Expo)</li>
            <li><strong>AI Models:</strong> Groq API, OpenAI SDK</li>
            <li><strong>Realtime Feed:</strong> Socket.io Client</li>
            <li><strong>Secure Auth:</strong> JWT verification, local_auth</li>
          </ul>
        </div>
      </div>

      <div class="ws-code-container">
        <div class="ws-code-header">
          <span>mobileController.js (Groq Command to GitHub Pipeline)</span>
          <button class="ws-copy-btn" onclick="copyCode('code-mob')">Copy Code</button>
        </div>
        <div class="ws-code-body">
          <pre><code id="code-mob">// Parsing natural language command -> committing to GitHub
export const handlePulseCommand = async (req, res) => {
  const { command, projectId } = req.body;
  const io = req.app.get('io');
  
  io.to(\`project-\${projectId}\`).emit('status', { step: 'search', msg: 'Scanning codebase...' });
  const structure = await Groq.parseCommand(command); // Identify tags/HTML elements
  
  io.to(\`project-\${projectId}\`).emit('status', { step: 'inject', msg: 'Injecting updates...' });
  const updatedCode = injectCodeChanges(structure);
  
  io.to(\`project-\${projectId}\`).emit('status', { step: 'commit', msg: 'Pushing GitHub commit...' });
  await git.pushCommit(updatedCode); // Trigger Vercel/Netlify auto-deploy
  
  res.json({ success: true, message: 'Website updated in 30 seconds!' });
};</code></pre>
        </div>
      </div>
    `
  },
  security: {
    tag: "SYS-03",
    title: "Cryptography & Security Shields Workspace",
    content: `
      <p class="ws-intro">
        Constructing secure software shields. Experts in local storage zero-knowledge encryption, hardware key store bindings, anti-decompile binary obfuscation, and active system memory safeguards.
      </p>

      <div class="ws-grid">
        <div class="ws-block">
          <h4>Subsystem Features</h4>
          <ul class="ws-list">
            <li><i class="fa-solid fa-shield-halved"></i> <strong>AES-256-GCM Vaults:</strong> Local file encryption with integrity headers.</li>
            <li><i class="fa-solid fa-shield-halved"></i> <strong>Android Keystore:</strong> Storing AES keys at hardware boundary via flutter_secure_storage.</li>
            <li><i class="fa-solid fa-shield-halved"></i> <strong>Anti-Sniffing (FLAG_SECURE):</strong> Native window blocking against screenshots and screencasts.</li>
            <li><i class="fa-solid fa-shield-halved"></i> <strong>Anti-Hacking (Obfuscation):</strong> ProGuard/R8 release build compression and decompiler obfuscators.</li>
          </ul>
        </div>

        <div class="ws-block">
          <h4>Core Security Protocols</h4>
          <ul class="ws-list">
            <li><strong>Encryption:</strong> AES-256-GCM / PBKDF2</li>
            <li><strong>Storage Hardware:</strong> Android KeyStore / iOS KeyChain</li>
            <li><strong>UI Isolation:</strong> Native WindowManager FLAG_SECURE</li>
            <li><strong>Threat Defense:</strong> Root/Jailbreak sniffer check</li>
          </ul>
        </div>
      </div>

      <div class="ws-code-container">
        <div class="ws-code-header">
          <span>MainActivity.kt (FLAG_SECURE Enforcement)</span>
          <button class="ws-copy-btn" onclick="copyCode('code-sec')">Copy Code</button>
        </div>
        <div class="ws-code-body">
          <pre><code id="code-sec">package com.rendfile.manager

import android.view.WindowManager
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine

// Block OS from capturing screens in vault routes
class MainActivity: FlutterActivity() {
    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        // Block screen records & screenshots
        window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
    }
}</code></pre>
        </div>
      </div>
    `
  },
  cloud: {
    tag: "SYS-04",
    title: "Cloud Infrastructure & DevOps Workspace",
    content: `
      <p class="ws-intro">
        Architecting secure, cost-effective cloud structures. Specialize in AWS integrations, Cloudflare R2 bucket file serving pipelines, Stripe webhooks, and automated file-cleaner workers.
      </p>

      <div class="ws-grid">
        <div class="ws-block">
          <h4>Subsystem Features</h4>
          <ul class="ws-list">
            <li><i class="fa-solid fa-check"></i> <strong>Cloudflare R2:</strong> Serving static preview files via S3 bucket clients.</li>
            <li><i class="fa-solid fa-check"></i> <strong>Automated Cron Cleaners:</strong> 24-hour preview cleanups deleting expired static client previews.</li>
            <li><i class="fa-solid fa-check"></i> <strong>Stripe Webhook Integrations:</strong> Dynamic checkout events linking proposals to project setups.</li>
            <li><i class="fa-solid fa-check"></i> <strong>Secure Buckets:</strong> expirable, signable URLs.</li>
          </ul>
        </div>

        <div class="ws-block">
          <h4>Core DevOps Stack</h4>
          <ul class="ws-list">
            <li><strong>Cloud Provider:</strong> AWS (EC2, VPC), Cloudflare R2</li>
            <li><strong>Archiving Engine:</strong> archiver.js ZIP stream</li>
            <li><strong>Webhooks Handler:</strong> Stripe Webhook API</li>
            <li><strong>Cleanup Framework:</strong> Node cron timer loops</li>
          </ul>
        </div>
      </div>

      <div class="ws-code-container">
        <div class="ws-code-header">
          <span>previewCleanup.js (24h Cloudflare R2 Cron Auto-Cleaner)</span>
          <button class="ws-copy-btn" onclick="copyCode('code-cloud')">Copy Code</button>
        </div>
        <div class="ws-code-body">
          <pre><code id="code-cloud">// Periodic cleanup worker deleting expired live previews from R2
import Project from '../models/Project.js';
import { deletePreviewFiles } from './cloudflareR2.js';

export const startPreviewCleanupJob = () => {
  const THIRTY_MINUTES = 30 * 60 * 1000;
  
  setInterval(async () => {
    const expiredThreshold = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const expiredProjects = await Project.find({
      hasLivePreview: true,
      previewUploadedAt: { $lt: expiredThreshold }
    });

    for (const project of expiredProjects) {
      const keys = project.previewFiles.map(f => f.cloudKey);
      await deletePreviewFiles(keys); // Delete from Cloudflare R2
      
      project.hasLivePreview = false;
      project.previewFiles = [];
      await project.save();
      console.log(\`[CRON] Cleaned up preview assets for project \${project._id}\`);
    }
  }, THIRTY_MINUTES);
};</code></pre>
        </div>
      </div>
    `
  },
  growth: {
    tag: "SYS-05",
    title: "Growth Engineering & SEO/ASO Workspace",
    content: `
      <p class="ws-intro">
        Engineering high-converting digital products. Expertise in white-labeled Shopify dropshipping setups, dynamic Google/Facebook/TikTok ad architectures, and technical search visibility algorithms (SEO/ASO).
      </p>

      <div class="ws-grid">
        <div class="ws-block">
          <h4>Subsystem Features</h4>
          <ul class="ws-list">
            <li><i class="fa-solid fa-chart-line"></i> <strong>ASO Search Ranker:</strong> Search optimization funnels driving organic downloads on App stores.</li>
            <li><i class="fa-solid fa-chart-line"></i> <strong>Shopify Conversion Layouts:</strong> Building fast-loading Shopify themes focused on white-label branding.</li>
            <li><i class="fa-solid fa-chart-line"></i> <strong>CTR Ad Frameworks:</strong> Dynamic campaigns routing Facebook, Instagram, and TikTok traffic.</li>
            <li><i class="fa-solid fa-chart-line"></i> <strong>SEO Indexers:</strong> Optimizing sitemaps, JSON-LD schemas, and crawler indexes.</li>
          </ul>
        </div>

        <div class="ws-block">
          <h4>Telemetry Simulator (Interactive)</h4>
          <div class="telemetry-dashboard">
            <div class="tel-widget">
              <span class="tel-label">Avg CTR</span>
              <span class="tel-value success">4.85%</span>
            </div>
            <div class="tel-widget">
              <span class="tel-label">Conversion Rate</span>
              <span class="tel-value">3.2%</span>
            </div>
            <div class="tel-widget">
              <span class="tel-label">Organic Search Increase</span>
              <span class="tel-value success">+145%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="ws-block" style="margin-top: 1.5rem;">
        <h4>Growth Performance Formulas</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          ASO metadata algorithms optimize search indices. CTR campaigns balance target keywords, CPC constraints, and demographic indexes to yield a lower CPA.
        </p>
      </div>
    `
  },
  genai: {
    tag: "SYS-06",
    title: "GenAI & Media Production Workspace",
    content: `
      <p class="ws-intro">
        Integrating AI systems for digital marketing and content generation. Specialists in HeyGen API automated scripts, personalized AI email delivery pipelines, and AI product marketing media.
      </p>

      <div class="ws-grid">
        <div class="ws-block">
          <h4>Subsystem Features</h4>
          <ul class="ws-list">
            <li><i class="fa-solid fa-robot"></i> <strong>HeyGen Video Generation:</strong> Automated video scripts compiling marketing avatars.</li>
            <li><i class="fa-solid fa-robot"></i> <strong>Personalized Mailers:</strong> Custom LLM generators personalizing customer outreach emails.</li>
            <li><i class="fa-solid fa-robot"></i> <strong>AI Product Mockups:</strong> Video avatars generating marketing reels.</li>
            <li><i class="fa-solid fa-robot"></i> <strong>NLP Parsers:</strong> Compiling code edits based on user prompts.</li>
          </ul>
        </div>

        <div class="ws-block">
          <h4>Interactive Prompt Builder</h4>
          <div class="prompt-builder" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <textarea id="prompt-input" rows="2" style="background: #000; border: 1px solid var(--border-color); border-radius: 4px; padding: 0.5rem; color: #fff; font-family: var(--font-mono); font-size: 0.8rem;" placeholder="e.g. Generate customized email template for E-commerce clients"></textarea>
            <button class="btn primary" style="padding: 0.5rem;" onclick="synthesizePrompt()">Synthesize Prompt</button>
            <div id="prompt-result" style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--success); padding: 0.5rem; border: 1px dashed rgba(16, 185, 129, 0.3); border-radius: 4px; display: none;"></div>
          </div>
        </div>
      </div>
    `
  }
};

function openWorkspace(id) {
  const data = workspaces[id];
  if (!data) return;

  const overlay = document.getElementById('workspace-overlay');
  const wsTag = document.getElementById('ws-tag');
  const wsTitle = document.getElementById('ws-title');
  const wsContent = document.getElementById('ws-content');

  wsTag.textContent = data.tag;
  wsTitle.textContent = data.title;
  wsContent.innerHTML = data.content;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeWorkspace() {
  const overlay = document.getElementById('workspace-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore background scroll
}

function copyCode(elementId) {
  const codeText = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.style.color = "#10b981";
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.color = "";
    }, 2000);
  });
}

function synthesizePrompt() {
  const input = document.getElementById('prompt-input').value;
  const resultDiv = document.getElementById('prompt-result');
  if (!input) return;

  resultDiv.style.display = "block";
  resultDiv.innerText = "Synthesizing AI Engine Script...";
  setTimeout(() => {
    resultDiv.innerHTML = `<strong>PROMPT TEMPLATE GENERATED:</strong><br>[LLM CONFIG: Temperature 0.7]<br>"You are Mutasim's specialized GenAI outreach engine. Target input: \${input}. Personalize email payload using CTR indexes..."`;
  }, 1000);
}
