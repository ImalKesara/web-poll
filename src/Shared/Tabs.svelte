<script lang="ts">
    export let items : string[];
    export let activeItem :string;
</script>


<div class="tabs">
    <ul class="flex justify-center p-0 ">
    {#each items as item}
        <li class="mx-5 text-2xl text-gray-400 cursor-pointer">
            <div class="inline-block" class:active ={item===activeItem} >{item}</div>
        </li>
    {/each}
    </ul>
</div>

<style>
    .tabs{
        @apply mb-14
    }

    .active{
        @apply text-red-500 pe-10 border-b-2 border-red-300
    }
</style>