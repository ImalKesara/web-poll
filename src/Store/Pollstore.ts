import { writable } from 'svelte/store';

const Pollstore = writable([]);

export function saveToLocalStorage() {
  Pollstore.subscribe((value) => {
    window.localStorage.setItem('pollsitems', JSON.stringify(value));
  })();
}

export default Pollstore;
