import React, { useState, useEffect } from 'react';
// Import an icon (if you're using Font Awesome or an SVG)
import { FaVolumeUp } from 'react-icons/fa'; // Font Awesome example

const VoiceReader = ({ content }) => {
  const [synth, setSynth] = useState(window.speechSynthesis);
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);

  // Populate voices on component mount
  useEffect(() => {
    const populateVoiceList = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]); // Set default voice
    };

    populateVoiceList();

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoiceList;
    }
  }, [synth]);

  // Function to start reading aloud
  const readAloud = () => {
    if (!content || !synth || isSpeaking) return;

    const utterance = new SpeechSynthesisUtterance(content);
    utterance.voice = selectedVoice;
    utterance.pitch = 1; // Optional: customize pitch
    utterance.rate = 1;  // Optional: customize speed
    utterance.volume = 1; // Optional: customize volume

    // Disable speaking when it starts
    setIsSpeaking(true);

    // When utterance finishes, reset isSpeaking
    utterance.onend = () => {
      setIsSpeaking(false);
    };

    synth.speak(utterance);
  };

  // Function to stop reading
  const stopReading = () => {
    if (synth.speaking) {
      synth.cancel();
      setIsSpeaking(false);
    }
  };

  // Handle click events
  const handleClick = () => {
    if (!isSpeaking) {
      readAloud(); // Start reading on single click
    }
  };

  // Handle double-click to stop reading
  const handleDoubleClick = () => {
    stopReading(); // Stop reading on double-click
  };

  return (
    <div className="voice-reader">
      <h4>Voice Reader</h4>

      {/* Voice Icon for reading control */}
      <div onClick={handleClick} onDoubleClick={handleDoubleClick} style={{ cursor: 'pointer' }}>
        {/* Voice icon (Font Awesome used in this case) */}
        <FaVolumeUp size={30} color={isSpeaking ? 'red' : 'black'} />
      </div>
    </div>
  );
};

export default VoiceReader;