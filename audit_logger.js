// audit_logger.js
// Generates an audit log entry for a session

import crypto from 'crypto';
import fs from 'fs';

export function generateAuditLog({
  sessionId,
  consentState,
  metadata,
  outputPath = 'audit_log.txt',
}) {
  const logEntry = {
    sessionId,
    timestamp: new Date().toISOString(),
    consent: consentState,
    metadataSummary: metadata,
    integrityHash: generateIntegrityHash(sessionId, consentState, metadata),
  };

  const logText = JSON.stringify(logEntry, null, 2) + '\n\n';
  fs.appendFileSync(outputPath, logText, 'utf8');
  return logEntry;
}

function generateIntegrityHash(sessionId, consentState, metadata) {
  const hashInput = sessionId + consentState + JSON.stringify(metadata);
  return crypto.createHash('sha256').update(hashInput).digest('hex');
}
