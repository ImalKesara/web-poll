<script lang="ts">
  import CreatePollForm from './Components/CreatePollForm/CreatePollForm.svelte';
  import Footer from './Components/Footer/Footer.svelte';
  import Header from './Components/Header/Header.svelte';
  import Polllist from './Components/PollList/Polllist.svelte';
  import Tabs from './Shared/Tabs.svelte';
  import './app.css';

  let items = ['Current Polls', 'Add New Polls'];
  let activeItem = 'Current Polls';

  function tabChange(e) {
    activeItem = e.detail;
    console.log('tag changed');
  }

  //polls
  let polls = [
    {
      id: 1,
      Question: 'Javacript or python',
      answerA: 'javascript',
      answerB: 'python',
      voteA: 9,
      voteB: 10,
    },
  ];

  function store(e) {
    const poll = e.detail;
    polls = [...polls, poll];
    console.log(polls);
    activeItem = 'Current Polls';
  }
</script>

<Header />
<main>
  <!-- you case use shorthand {items} like this -->
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    {#each polls as poll}
      <Polllist />
    {/each}
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
