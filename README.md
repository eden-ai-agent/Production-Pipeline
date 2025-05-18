# Eden Production Pipeline

This repository contains the production-grade preprocessing pipeline used for Eden, a secure and consent-aware AI training platform.

### Modules included:
- `live_audio_capture.js` — captures and handles live microphone input
- `transcript_generator.js` — transcribes speech to text (Whisper API)
- `phi_redactor.js` — redacts PHI using GPT or rule-based logic
- `metadata_tagger.js` — tags speaker info, consent, and emotion
- `encryptor.js` — encrypts session data with AES/RSA
- `audit_logger.js` — logs audit trail with hash and consent snapshot
- `export_bundle.js` — packages session data for handoff

Built with privacy, portability, and trust as first-class citizens.
