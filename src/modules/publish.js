
// Created using Codiquest Markdown Parser. You can edit this file safely (it won't be overwritten by the parser),
// Drink water, stay active and keep coding! | •⩊• |

export const moduleInfo = {
  title: 'Publish',
  shortDescription: 'Welcome to my publish module!',
  public: false,
  linksTo: 'publish',
  image: 'codibg.webp',
  tags: ["publish"],
  isNew: true
};

import { levels } from './publish/levels.auto.js';
import { questions } from './publish/questions.auto.js';

export { levels, questions };

// Uncomment the following lines to automatically add all questions to the levels array
// questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));
