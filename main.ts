import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const text = `I apologize for watering your decorative plastic succulent while the thirsty peace lily withered in the corner.
I have learned that vibrant colors are often deceptive decoys, so I will now verify soil conductivity before activating my irrigation nozzles.`;

const lines = text.split('\n');
if (text.includes('\r') || lines.length !== 2 || lines.some((line) => line.length === 0) || Array.from(text).length < 1 || Array.from(text).length > 399) {
  throw new Error('Invalid entry text');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${text}\n`, 'utf8');
if (readFileSync('/output/entry.txt', 'utf8') !== `${text}\n`) {
  throw new Error('Output verification failed');
}
