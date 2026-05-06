// ============================================================
// Image Map — Layer 1: All images imported through Vite (hashed filenames)
// ============================================================

import CampusStage from '../assets/images/CampusStage.png';
import DevPortfolio from '../assets/images/DevPortfolio.png';
import PlanIt from "../assets/images/Plan'It.png";
import imagePng from '../assets/images/image.png';
import CLR1 from '../assets/images/CLR1.png';
import CLR2 from '../assets/images/CLR2.jpeg';
import NMCHackathon1 from '../assets/images/NMCHackathon1.png';
import NMCHackathon2 from '../assets/images/NMCHackathon2.jpeg';
import NRCHackathon1 from '../assets/images/NRCHackathon 1.png';
import NRCHackathon2 from '../assets/images/NRCHackathon 2.jpeg';
import SRG6Hackathon1 from '../assets/images/SRG6Hackathon1.png';
import SRG6Hackathon2 from '../assets/images/SRG6Hackathon2.png';

// Map original paths (from projects.json) to Vite-bundled URLs
const imageMap = {
  './assets/images/CampusStage.png': CampusStage,
  './assets/images/DevPortfolio.png': DevPortfolio,
  "./assets/images/Plan'It.png": PlanIt,
  './assets/images/image.png': imagePng,
  './assets/images/CLR1.png': CLR1,
  './assets/images/CLR2.jpeg': CLR2,
  './assets/images/NMCHackathon1.png': NMCHackathon1,
  './assets/images/NMCHackathon2.jpeg': NMCHackathon2,
  './assets/images/NRCHackathon 1.png': NRCHackathon1,
  './assets/images/NRCHackathon 2.jpeg': NRCHackathon2,
  './assets/images/SRG6Hackathon1.png': SRG6Hackathon1,
  './assets/images/SRG6Hackathon2.png': SRG6Hackathon2,
};

// Also export individual images for direct import
export {
  CampusStage,
  DevPortfolio,
  PlanIt,
  imagePng,
  CLR1,
  CLR2,
  NMCHackathon1,
  NMCHackathon2,
  NRCHackathon1,
  NRCHackathon2,
  SRG6Hackathon1,
  SRG6Hackathon2,
};

/**
 * Resolve an original image path to its Vite-bundled URL.
 * Returns the hashed URL if found, or the original path as fallback.
 */
export function resolveImage(originalPath) {
  return imageMap[originalPath] || originalPath;
}

export default imageMap;
