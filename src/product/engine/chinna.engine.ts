import { voiceIntents } from "../data/voiceIntents.mock";

export function processVoiceCommand(input: string) {
  const normalized = input.toLowerCase().trim();

  const match = voiceIntents.find((intent) =>
    normalized.includes(intent.phrase)
  );

  if (!match) {
    return {
      success: false,
      response: "Sorry, I didn't understand that command.",
    };
  }

  return {
    success: true,
    action: match.action,
    target: match.target,
    response: match.response,
  };
}