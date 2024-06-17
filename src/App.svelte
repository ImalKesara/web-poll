<script lang="ts">
  import { onMount } from 'svelte';
  import CreatePollForm from './Components/CreatePollForm/CreatePollForm.svelte';
  import Footer from './Components/Footer/Footer.svelte';
  import Header from './Components/Header/Header.svelte';
  import Polllist from './Components/PollList/Polllist.svelte';
  import Tabs from './Shared/Tabs.svelte';
  import './app.css';

  let items = ['Current Polls', 'Add New Polls'];
  let activeItem = 'Current Polls';
  const POLLS_STORE = 'pollsitems';

  function tabChange(e) {
    activeItem = e.detail;
    console.log('tag changed');
  }

  function saveToLocalStorage() {
    window.localStorage.setItem(POLLS_STORE, JSON.stringify(polls));
  }

  //polls
  let polls = [
    {
      id: 1,
      Question: 'Javacript or python',
      answerA: 'javascript',
      answerB: 'python',
      voteA: 20,
      voteB: 10,
    },
  ];

  function store(e) {
    const poll = e.detail;
    polls = [...polls, poll];
    saveToLocalStorage();
    console.log(polls);
    activeItem = 'Current Polls';
  }

  function changeVote(e) {
    console.log(e.detail);
    const { id, option } = e.detail;
    let copiedArray = [...polls];
    let findIndex = copiedArray.find((poll) => poll.id == id);
    if (option === 'a') {
      findIndex.voteA++;
    }
    if (option === 'b') {
      findIndex.voteB++;
    }

    polls = copiedArray;
    saveToLocalStorage();
  }

  onMount(() => {
    const pollItms = window.localStorage.getItem(POLLS_STORE);
    if (pollItms == null) {
      return;
    }
    try {
      const data = JSON.parse(pollItms);
      polls = data;
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
    <Polllist {polls} on:changeVote={changeVote} />
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
