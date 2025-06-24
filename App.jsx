
import React, { useState } from "react";

const concreteNouns = [
  "apple", "banana", "wate", "diamond", "spoon", "fridge", "eraser", "microwave", "pencil", "tooth",
  "glass", "mug", "sink", "shower", "couch", "cliff", "dish", "screen", "bottle", "stone",
  "bed", "shell", "leaf", "truck", "notebook", "chair", "fire", "frame", "cup", "mirror",
  "laptop", "pen", "tree", "fountain", "comb", "train", "pencil case", "backpack", "hanger", "flashlight",
  "fan", "clock", "phone", "blanket", "camera", "scissors", "lamp", "television", "suitcase", "calendar",
  "ruler", "soap", "brush", "shovel", "bucket", "sponge", "helmet", "whistle", "map", "key",
  "glove", "magnet", "ball", "broom", "bin", "radio", "tape", "card", "paper", "marker",
  "chalk", "folder", "bicycle", "hammer", "nail", "screwdriver", "ladder", "tent", "pan", "plate",
  "fork", "knife", "spatula", "grater", "kettle", "blender", "mixer", "tray", "basket", "jar",
  "vase", "plant", "rope", "net", "bat", "glasses", "hat", "boot", "shoe", "sock"
];

const abstractNouns = [
  "despair", "hope", "excitement", "soul", "birthday", "peace", "intelligence", "freedom", "love", "joy",
  "anger", "sadness", "justice", "wisdom", "pride", "ambition", "faith", "knowledge", "truth", "empathy",
  "strength", "fear", "courage", "trust", "belief", "kindness", "creativity", "confidence", "compassion", "respect",
  "gratitude", "humility", "generosity", "patience", "honesty", "integrity", "loyalty", "sympathy", "hopefulness", "doubt",
  "clarity", "desire", "envy", "guilt", "shame", "forgiveness", "nostalgia", "regret", "sincerity", "serenity",
  "ambivalence", "affection", "unity", "independence", "curiosity", "delight", "equality", "glory", "happiness", "hardship",
  "hatred", "hospitality", "humor", "inspiration", "jealousy", "liberty", "loneliness", "love", "melancholy", "mercy",
  "morality", "motivation", "mystery", "opportunity", "passion", "peacefulness", "perseverance", "pleasure", "rage", "reliability",
  "remorse", "reputation", "reverence", "sanity", "selfishness", "sensitivity", "shyness", "sorrow", "stamina", "surprise",
  "tolerance", "tranquility", "valor", "vanity", "virtue", "willpower", "wonder", "zeal", "zest", "yearning"
];

const quotes = [
  "\"Without tenderness, a man is uninteresting.\" — Marlene Dietrich",
  "\"Order is the shape upon which beauty depends.\" — Pearl Buck",
  "\"A man's looks are measured by the depth of his pockets.\" — Elizabeth Aston",
  "\"Our remedies oft in ourselves do lie.\" — William Shakespeare",
  "\"People generally see what they look for, and hear what they listen for.\" — Harper Lee",
  "\"The beginning is always today.\" — Mary Shelley",
  "\"Happiness in intelligent people is the rarest thing I know.\" — Ernest Hemingway",
  "\"Happiness is not something ready made. It comes from your own actions.\" — Dalai Lama",
  "\"One person can make a difference, and everyone should try.\" — John F. Kennedy",
  "\"I dwell in possibility.\" — Emily Dickinson",
  "\"Education is the most powerful weapon which you can use to change the world.\" — Nelson Mandela",
  "\"Do not go where the path may lead, go instead where there is no path and leave a trail.\" — Ralph Waldo Emerson",
  "\"It is never too late to be what you might have been.\" — George Eliot",
  "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" — Winston Churchill",
  "\"Be yourself; everyone else is already taken.\" — Oscar Wilde",
  "\"In the middle of difficulty lies opportunity.\" — Albert Einstein",
  "\"Believe you can and you're halfway there.\" — Theodore Roosevelt",
  "\"You must be the change you wish to see in the world.\" — Mahatma Gandhi",
  "\"The best way out is always through.\" — Robert Frost",
  "\"A thing of beauty is a joy forever.\" — John Keats",
  "\"The only way to do great work is to love what you do.\" — Steve Jobs",
  "\"Imagination is more important than knowledge.\" — Albert Einstein",
  "\"The only limit to our realization of tomorrow is our doubts of today.\" — Franklin D. Roosevelt",
  "\"Act as if what you do makes a difference. It does.\" — William James",
  "\"To handle yourself, use your head; to handle others, use your heart.\" — Eleanor Roosevelt",
  "\"Great minds discuss ideas; average minds discuss events; small minds discuss people.\" — Eleanor Roosevelt",
  "\"Do not wait for leaders; do it alone, person to person.\" — Mother Teresa",
  "\"To live is the rarest thing in the world. Most people exist, that is all.\" — Oscar Wilde",
  "\"What lies behind us and what lies before us are tiny matters compared to what lies within us.\" — Ralph Waldo Emerson",
  "\"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.\" — Ernest Hemingway",
  "\"It does not matter how slowly you go as long as you do not stop.\" — Confucius",
  "\"Shoot for the moon. Even if you miss, you'll land among the stars.\" — Norman Vincent Peale",
  "\"Logic will get you from A to B. Imagination will take you everywhere.\" — Albert Einstein",
  "\"Life is either a daring adventure or nothing at all.\" — Helen Keller",
  "\"Turn your wounds into wisdom.\" — Oprah Winfrey",
  "\"Success usually comes to those who are too busy to be looking for it.\" — Henry David Thoreau",
  "\"A journey of a thousand miles begins with a single step.\" — Lao Tzu",
  "\"We must learn to live together as brothers or perish together as fools.\" — Martin Luther King Jr.",
  "\"When we are no longer able to change a situation, we are challenged to change ourselves.\" — Viktor Frankl",
  "\"It always seems impossible until it's done.\" — Nelson Mandela",
  "\"There is no greater agony than bearing an untold story inside you.\" — Maya Angelou",
  "\"Don't watch the clock; do what it does. Keep going.\" — Sam Levenson",
  "\"Hardships often prepare ordinary people for an extraordinary destiny.\" — C.S. Lewis"
];

export default function App() {
  const [prompt, setPrompt] = useState({ concrete: "", quote: "", abstract: "" });

  const generatePrompt = () => {
    const randomConcrete = concreteNouns[Math.floor(Math.random() * concreteNouns.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomAbstract = abstractNouns[Math.floor(Math.random() * abstractNouns.length)];
    setPrompt({ concrete: randomConcrete, quote: randomQuote, abstract: randomAbstract });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">BB&N Impromptu Generator</h1>
      <button
        onClick={generatePrompt}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
      >
        Generate Prompts
      </button>
      {prompt.concrete && (
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-lg space-y-4">
          <div>
            <h2 className="font-semibold">Concrete Noun:</h2>
            <p>{prompt.concrete}</p>
          </div>
          <div>
            <h2 className="font-semibold">Quote:</h2>
            <p>{prompt.quote}</p>
          </div>
          <div>
            <h2 className="font-semibold">Abstract Noun:</h2>
            <p>{prompt.abstract}</p>
          </div>
        </div>
      )}
    </div>
  );
}
