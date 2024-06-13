<script lang="ts">
  import Buttons from "../../Shared/Buttons.svelte";

    let fields = {
        Question : '',
        answerA : '',
        answerB : ''
     }
    const submitHandle = ()=>{
        console.log(fields);
    }
</script>

<form on:submit|preventDefault ={submitHandle} class="w-4/5 m-auto">
        <div class="form-field">
            <label for="question">Poll Question :</label>
            <input id ="question" type="text" placeholder="Question" bind:value={fields.Question}>
        </div>
        <div class="form-field">
            <label for="answer-a">Answer A :</label>
            <input id ="answer-a" type="text" placeholder="Answer A" bind:value={fields.answerA}>
        </div>
        <div class="form-field">
            <label for="answer-b">Answer B :</label>
            <input id ="answer-b" type="text" placeholder="Answer B" bind:value={fields.answerB}>
        </div>
        <div class="flex justify-center">
            <Buttons colors = "purple">Add Poll</Buttons>            
        </div>
</form>

<style>
    .form-field{
        @apply flex flex-col my-8
    }
    label{
        @apply py-3
    }
    input{
        @apply h-10 border-2 p-2 rounded-md
    }
</style>