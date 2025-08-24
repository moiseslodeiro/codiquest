
// Created using Codiquest Markdown Parser. You can edit this file safely (it won't be overwritten by the parser),
// Drink water, stay active and keep coding! | •⩊• |

export const moduleInfo = {
  title: 'Components',
  shortDescription: 'Welcome to my components module!',
  public: false,
  linksTo: 'components',
  image: 'codibg.webp',
  tags: ["components"],
  isNew: true
};

import { levels } from './components/levels.auto.js';
import { questions } from './components/questions.auto.js';

export { levels, questions };

// Uncomment the following lines to automatically add all questions to the levels array
// questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));
