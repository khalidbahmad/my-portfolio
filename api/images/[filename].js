// ============================================================
// Vercel Serverless API — Image Protection Gate
// Validates access token before serving images
// ============================================================

import fs from 'fs';
import path from 'path';

const MIME_TYPES = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate access token from header or cookie
  const token =
    req.headers['x-access-token'] ||
    req.cookies?.access_token ||
    req.query?.token;

  if (!token) {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Access token required. Please visit the website first.',
    });
  }

  // Get the requested filename
  const { filename } = req.query;

  if (!filename) {
    return res.status(400).json({ error: 'Filename is required' });
  }

  // Sanitize filename to prevent path traversal
  const sanitized = path.basename(filename);
  const ext = path.extname(sanitized).toLowerCase();
  const mimeType = MIME_TYPES[ext];

  if (!mimeType) {
    return res.status(400).json({ error: 'Unsupported file type' });
  }

  // Look for the image in the assets directory
  const imagePath = path.join(process.cwd(), 'src', 'assets', 'images', sanitized);

  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: 'Image not found' });
  }

  // Serve the image
  const imageBuffer = fs.readFileSync(imagePath);
  res.setHeader('Content-Type', mimeType);
  res.setHeader('Cache-Control', 'private, max-age=3600');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  return res.status(200).send(imageBuffer);
}
