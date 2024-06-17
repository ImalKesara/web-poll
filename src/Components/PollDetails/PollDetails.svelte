<script lang="ts">
  import Card from '../../Shared/Card.svelte';
  import Pollstore from '../../Store/Pollstore.ts';

  export let poll;

  function handleVote(option, id) {
    Pollstore.update((currentPolls) => {
      let copiedArray = [...currentPolls];
      let findIndex = copiedArray.find((poll) => poll.id == id);
      if (option === 'a') {
        findIndex.voteA++;
      }
      if (option === 'b') {
        findIndex.voteB++;
      }

      return copiedArray;
    });
  }

  $: totalVotes = poll.voteA + poll.voteB;
  $: percentageA = Math.floor((poll.voteA / totalVotes) * 100);
  $: percentageB = Math.floor((poll.voteB / totalVotes) * 100);
</script>

<Card>
  <div class="poll font-md capitalize">
    <h1 class=" text-2xl font-bold text-gray-500">{poll.Question}</h1>
    <p class=" mt-2 text-sm mb-7">Total votes : {totalVotes}</p>
    <div
      class="answers cursor-pointer hover:opacity-50 ease-in duration-200 flex flex-col gap-1"
      on:click={() => handleVote('a', poll.id)}
    >
      <div class="percent percent-a" style="width: {percentageA}%"></div>
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>

    <div
      class="answers cursor-pointer hover:opacity-50 ease-in duration-200 flex flex-col gap-1"
      on:click={() => handleVote('b', poll.id)}
    >
      <div class="percent percent-b" style="width: {percentageB}%;"></div>
      <span>{poll.answerB} ({poll.voteB})</span>
    </div>
  </div>
</Card>

<style>
  span {
    @apply inline-block py-3 px-5 bg-gray-200 w-full rounded-lg font-bold;
  }

  .answers {
    @apply relative mb-1;
  }

  .percent {
    height: 100%;
    @apply absolute box-border flex flex-col;
  }

  .percent-a {
    border-left: 3px solid green;
    @apply opacity-50 rounded-r-lg bg-green-300 ease-in duration-150;
  }

  .percent-b {
    border-left: 3px solid red;
    @apply opacity-50 rounded-r-lg bg-red-300 ease-in duration-150;
  }
</style>
