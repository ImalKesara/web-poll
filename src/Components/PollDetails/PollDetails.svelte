<script lang="ts">
  import Buttons from './../../Shared/Buttons.svelte';
  import Card from '../../Shared/Card.svelte';
  import Pollstore from '../../Store/Pollstore.ts';
  import { saveToLocalStorage } from '../../Store/Pollstore';
  import Icon from '@iconify/svelte';

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

  function deletePoll(id) {
    Pollstore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id != id);
    });
    saveToLocalStorage();
  }

  $: totalVotes = poll.voteA + poll.voteB;
  $: percentageA = Math.floor((poll.voteA / totalVotes) * 100);
  $: percentageB = Math.floor((poll.voteB / totalVotes) * 100);
</script>

<Card>
  <div class="poll font-md capitalize relative">
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

    <div class="delete">
      <button
        on:click={() => {
          deletePoll(poll.id);
        }}
      >
        <Icon
          icon="zondicons:close-outline"
          width="1.2em"
          height="1.2em"
          style="color: black"
        />
      </button>
    </div>
  </div>
</Card>

<style>
  span {
    @apply inline-block py-3 px-5 bg-gray-200 w-full rounded-lg font-bold;
  }

  Icon {
    background-color: red;
  }

  .delete {
    position: absolute;
    top: 0;
    right: 0;
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
