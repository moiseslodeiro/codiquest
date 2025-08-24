
// Created using Codiquest Markdown Parser. You can edit this file safely (it won't be overwritten by the parser),
// Drink water, stay active and keep coding! | •⩊• |

export const moduleInfo = {
  title: 'Questions',
  shortDescription: 'Welcome to my questions module!',
  public: false,
  linksTo: 'questions',
  image: 'codibg.webp',
  tags: ["questions"],
  isNew: true
};

import { levels } from './questions/levels.auto.js';
import { questions } from './questions/questions.auto.js';

export { levels, questions };

// Uncomment the following lines to automatically add all questions to the levels array
// questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));
