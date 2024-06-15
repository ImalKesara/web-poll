<script lang="ts">
  import PollDetails from '../PollDetails/PollDetails.svelte';

  export let polls = []; //default value was empty
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div class="list">
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
  }
</style>
