import { writable } from 'svelte/store';

const Pollstore = writable([
  {
    id: 1,
    Question: 'Javacript or python',
    answerA: 'javascript',
    answerB: 'python',
    voteA: 20,
    voteB: 10,
  },
]);

export default Pollstore;
