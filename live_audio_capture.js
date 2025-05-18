// live_audio_capture.js
// Handles live microphone capture in the browser using MediaRecorder

let mediaRecorder;
let audioChunks = [];

export async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  };

  mediaRecorder.start();
  console.log("Recording started");
}

export function stopRecording() {
  return new Promise((resolve) => {
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      audioChunks = [];
      resolve(audioBlob);
    };
    mediaRecorder.stop();
    console.log("Recording stopped");
  });
}
