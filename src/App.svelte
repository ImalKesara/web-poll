<script lang="ts">
  import { onMount } from 'svelte';
  import CreatePollForm from './Components/CreatePollForm/CreatePollForm.svelte';
  import Footer from './Components/Footer/Footer.svelte';
  import Header from './Components/Header/Header.svelte';
  import Polllist from './Components/PollList/Polllist.svelte';
  import Tabs from './Shared/Tabs.svelte';
  import './app.css';
  import Pollstore from './Store/Pollstore.ts';

  let items = ['Current Polls', 'Add New Polls'];
  let activeItem = 'Current Polls';
  const POLLS_STORE = 'pollsitems';

  function tabChange(e) {
    activeItem = e.detail;
    console.log('tag changed');
  }

  function saveToLocalStorage() {
    window.localStorage.setItem(POLLS_STORE, JSON.stringify(Pollstore));
  }

  function store(e) {
    activeItem = 'Current Polls';
    saveToLocalStorage();
  }

  onMount(() => {
    const pollItms = window.localStorage.getItem(POLLS_STORE);
    if (pollItms == null) {
      return;
    }
    try {
      const data = JSON.parse(pollItms);
      Pollstore.set(data);
    } catch (err) {
      console.error(err);
    }
  });
</script>

<Header />
<main>
  <!-- you case use shorthand {items} like this -->
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <!-- <Polllist {polls} on:changeVote={changeVote} /> -->
    <Polllist />
  {:else if activeItem === 'Add New Polls'}
    <CreatePollForm on:store={store} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 1em auto;
  }
</style>
