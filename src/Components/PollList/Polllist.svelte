<script lang="ts">
  import PollDetails from '../PollDetails/PollDetails.svelte';
  import Pollstore from '../../Store/Pollstore.ts';
  import { onDestroy, onMount } from 'svelte';

  // export let polls = []; //default value was empty

  // Pollstore.subscribe((data) => {
  //   polls = data;
  // });

  // onMount(() => {
  //   console.log('mout');
  // });
</script>

<div class="poll-list">
  {#each $Pollstore as poll (poll.id)}
    <div class="list w-full">
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
</style>
