
// Created using Codiquest Markdown Parser. You can edit this file safely (it won't be overwritten by the parser),
// Drink water, stay active and keep coding! | •⩊• |

export const moduleInfo = {
  title: 'Modules',
  shortDescription: 'Welcome to my modules module!',
  public: false,
  linksTo: 'modules',
  image: 'codibg.webp',
  tags: ["modules"],
  isNew: true
};

import { levels } from './modules/levels.auto.js';
import { questions } from './modules/questions.auto.js';

export { levels, questions };

// Uncomment the following lines to automatically add all questions to the levels array
// questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));
