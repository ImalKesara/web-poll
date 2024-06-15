<script lang="ts">
  export let poll;
</script>

<div class="poll font-md capitalize">
  <h1 class=" text-2xl font-bold">{poll.Question}</h1>
  <div class="answers">
    <div class="percent percent-a"></div>
    <span>{poll.answerA} ({poll.voteA})</span>

    <div class="percent percent-b"></div>
    <span>{poll.answerB} ({poll.voteB})</span>
  </div>
</div>

<style>
</style>
