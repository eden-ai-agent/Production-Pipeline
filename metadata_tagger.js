// metadata_tagger.js
// Attaches metadata like speaker role, consent state, emotion risk, and timestamp

export function generateMetadata({
  speaker = 'user',
  consent = 'unknown',
  emotionRisk = 'neutral',
  source = 'live',
}) {
  return {
    speaker,
    consent,
    emotionRisk,
    source,
    timestamp: new Date().toISOString(),
    sessionId: generateSessionId(),
  };
}

function generateSessionId() {
  return 'sess_' + Math.random().toString(36).substr(2, 9);
}
