import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/BGImg.js').BGImg} */
  backgroundImage: null,
  /** @type {import('./models/Quote.js').Quote} */
  quote: null,
  /** @type {import('./models/Weather.js').Weather} */
  weather: null,
  /** @type {import('./models/Todo.js').Todo[]} */
  todos: [],
  todoListOwner: null,
  currentTime: '',
  currentTimeMilitary: '',
  timeFormat: 'standard',
  timeInterval: null,
  tempUnit: 'F'
})
