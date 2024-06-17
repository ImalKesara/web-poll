<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Card from '../../Shared/Card.svelte';

  export let poll;
  const dispatch = createEventDispatcher();

  function handleVote(option, id) {
    dispatch('changeVote', { option: option, id: id });
  }

  $: totalVotes = poll.voteA + poll.voteB;
</script>

<Card>
  <div class="poll font-md capitalize">
    <h1 class=" text-2xl font-bold text-gray-500">{poll.Question}</h1>
    <p class=" mt-2 text-sm mb-7">Total votes : {totalVotes}</p>
    <div
      class="answers cursor-pointer hover:opacity-50 ease-in duration-200 flex flex-col gap-1"
      on:click={() => handleVote('a', poll.id)}
    >
      <div class="percent percent-a"></div>
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>

    <div
      class="answers cursor-pointer hover:opacity-50 ease-in duration-200 flex flex-col gap-1"
      on:click={() => handleVote('b', poll.id)}
    >
      <div class="percent percent-b"></div>
      <span>{poll.answerB} ({poll.voteB})</span>
    </div>
  </div>
</Card>

<style>
  span {
    @apply inline-block py-3 px-5 bg-gray-200 w-full rounded-lg font-bold;
  }
</style>
