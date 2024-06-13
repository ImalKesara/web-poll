<script lang="ts">
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
            <button class="bg-sky-500 p-3 rounded-md text-white font-bold ease duration-300 hover:bg-sky-600 inline-block">Add Poll</button>
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