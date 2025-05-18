// export_bundle.js
// Combines encrypted data, metadata, redacted transcript, and audit log into a package

import fs from 'fs';
import path from 'path';

export function exportSessionBundle({
  encryptedAudio,
  redactedTranscript,
  metadata,
  auditLogEntry,
  outputDir = './session_output',
}) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const sessionId = metadata.sessionId || 'unknown';

  fs.writeFileSync(path.join(outputDir, `${sessionId}_audio.enc`), encryptedAudio.data, 'utf8');
  fs.writeFileSync(path.join(outputDir, `${sessionId}_iv.txt`), encryptedAudio.iv, 'utf8');
  fs.writeFileSync(path.join(outputDir, `${sessionId}_transcript.txt`), redactedTranscript, 'utf8');
  fs.writeFileSync(path.join(outputDir, `${sessionId}_metadata.json`), JSON.stringify(metadata, null, 2), 'utf8');
  fs.writeFileSync(path.join(outputDir, `${sessionId}_audit.json`), JSON.stringify(auditLogEntry, null, 2), 'utf8');

  console.log(`Session bundle exported to ${outputDir}`);
}
