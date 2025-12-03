import React, { useEffect, useRef, useState } from "react";
import { useHomeState } from "./homeState.jsx";

export default function ChinnaOverlay() {
  const {
    toggleLight,
    toggleFan,
    setFanSpeed,
    toggleAC,
    changeACTemperature,
  } = useHomeState();

  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);
  const transcriptRef = useRef("");

  // init speech recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported.");
      return;
    }

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.lang = "en-IN";
    rec.interimResults = true;

    rec.onstart = () => {
      setListening(true);
    };

    rec.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      const lower = text.toLowerCase();
      transcriptRef.current = lower;
      setTranscript(lower);
    };

    rec.onerror = () => setListening(false);

    rec.onend = () => {
      setListening(false);
      const finalText = transcriptRef.current.trim();
      if (finalText) processCommand(finalText);
      transcriptRef.current = "";
    };

    recognitionRef.current = rec;
  }, []);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    synth.speak(u);
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    transcriptRef.current = "";
    setTranscript("");
    speak("Chinna listening, say a command.");

    setTimeout(() => {
      try {
        recognitionRef.current.start();
      } catch {
        // already running
      }
    }, 700);
  };

  const processCommand = (cmd) => {
    const spoken = cmd.toLowerCase();

    // wake word
    if (spoken.includes("hey chinna")) {
      speak("Yes, tell me.");
      setTimeout(() => startListening(), 600);
      return;
    }

    // for now: only living room demo
    const room = "livingRoom";

    if (spoken.includes("light on")) {
      toggleLight(room);
      speak("Living room lights turned on.");
      return;
    }
    if (spoken.includes("light off")) {
      toggleLight(room);
      speak("Living room lights turned off.");
      return;
    }

    if (spoken.includes("fan on")) {
      toggleFan(room);
      speak("Fan turned on.");
      return;
    }
    if (spoken.includes("fan off")) {
      toggleFan(room);
      speak("Fan turned off.");
      return;
    }
    if (spoken.includes("fan speed up")) {
      setFanSpeed(room, 5);
      speak("Fan speed increased.");
      return;
    }
    if (spoken.includes("fan speed down")) {
      setFanSpeed(room, 1);
      speak("Fan speed reduced.");
      return;
    }

    if (spoken.includes("ac on")) {
      toggleAC(room);
      speak("A C turned on.");
      return;
    }
    if (spoken.includes("ac off")) {
      toggleAC(room);
      speak("A C turned off.");
      return;
    }
    if (spoken.includes("increase ac") || spoken.includes("temperature up")) {
      changeACTemperature(room, 28);
      speak("Temperature increased.");
      return;
    }
    if (spoken.includes("decrease ac") || spoken.includes("temperature down")) {
      changeACTemperature(room, 20);
      speak("Temperature decreased.");
      return;
    }

    speak("Sorry, I did not understand.");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => {
          setOpen(true);
          startListening();
        }}
        className="fixed bottom-4 right-6 z-40 rounded-full px-4 py-3 bg-[#ff1a1a] text-black text-xs font-semibold tracking-[0.16em] uppercase shadow-[0_0_18px_rgba(255,26,26,0.8)] flex items-center gap-2"
      >
        🎤 <span>Chinna</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="card w-full max-w-md relative p-5">
            <button
              className="absolute top-2 right-3 text-slate-400 text-sm"
              onClick={() => {
                setOpen(false);
                setTranscript("");
                transcriptRef.current = "";
              }}
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold text-[#ffb4b4] mb-1">
              Chinna • Live Voice Demo
            </h2>
            <p className="text-xs text-slate-400 mb-4">
              Say{" "}
              <span className="text-[#ff1a1a] font-semibold">
                “Hey Chinna”
              </span>{" "}
              or a direct command like “light on”.
            </p>

            <div className="flex flex-col items-center py-4">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all ${
                  listening
                    ? "bg-[#ff1a1a] text-black shadow-[0_0_22px_rgba(255,26,26,0.9)]"
                    : "bg-slate-900 text-[#ffb4b4]"
                }`}
              >
                🎤
              </div>

              <p className="text-xs text-slate-500 mt-4 mb-1">You said:</p>
              <div className="text-sm text-slate-200 min-h-[32px] text-center px-4">
                {transcript || (listening ? "Listening…" : "—")}
              </div>

              <button
                onClick={startListening}
                className="btn-red w-full mt-4"
              >
                {listening ? "Listening…" : "Start Listening"}
              </button>
            </div>

            <div className="mt-4 border-t border-white/10 pt-3">
              <p className="text-[11px] text-slate-400 mb-1">
                Sample commands:
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1 list-disc ml-4">
                <li>“Hey Chinna, light on”</li>
                <li>“Hey Chinna, fan off”</li>
                <li>“Hey Chinna, increase AC”</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}