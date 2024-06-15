<script lang="ts">
  export let poll;
  $: totalVotes = poll.voteA + poll.voteB;
</script>

<div class="poll font-md capitalize">
  <h1 class=" text-2xl font-bold text-gray-500">{poll.Question}</h1>
  <p class=" mt-2 text-sm mb-7">Total votes : {totalVotes}</p>
  <div
    class="answers cursor-pointer my-3 mx-auto relative hover:opacity-50 ease-in duration-200"
  >
    <div class="percent percent-a"></div>
    <span>{poll.answerA} ({poll.voteA})</span>

    <div class="percent percent-b"></div>
    <span>{poll.answerB} ({poll.voteB})</span>
  </div>
</div>

<style>
  span {
    @apply inline-block py-2 px-5 bg-gray-200 w-full m-1 rounded-lg font-bold;
  }
</style>
