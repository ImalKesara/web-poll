<script lang="ts">
  import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let items : string[];
    export let activeItem :string;
</script>


<div class="tabs">
    <ul class="flex justify-center p-0">
    {#each items as item}
        <li class="mx-5 text-xl text-gray-400 cursor-pointer " on:click={()=>dispatch('tabChange',item)} >
            <div class:active ={item===activeItem} >{item}</div>
        </li>
    {/each}
    </ul>
</div>

<style>
    .tabs{
        @apply mb-14
    }

    .active{
        @apply text-purple-500  border-b-2 border-purple-500
    }
</style>