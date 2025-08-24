
// Created using Codiquest Markdown Parser. You can edit this file safely (it won't be overwritten by the parser),
// Drink water, stay active and keep coding! | •⩊• |

export const moduleInfo = {
  title: 'Modules_auto',
  shortDescription: 'Welcome to my modules_auto module!',
  public: false,
  linksTo: 'modules_auto',
  image: 'codibg.webp',
  tags: ["modules_auto"],
  isNew: true
};

import { levels } from './modules_auto/levels.auto.js';
import { questions } from './modules_auto/questions.auto.js';

export { levels, questions };

// Uncomment the following lines to automatically add all questions to the levels array
// questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));
