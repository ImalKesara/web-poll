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

<form on:submit|preventDefault ={submitHandle} >
        <div class="form-field">
            <label for="question">Poll Question</label>
            <input id ="question" type="text" placeholder="ko hutto" bind:value={fields.Question}>
        </div>
        <div class="form-field">
            <label for="answer-a">Answer A</label>
            <input id ="answer-a" type="text" placeholder="ko hutto" bind:value={fields.answerA}>
        </div>
        <div class="form-field">
            <label for="answer-b">Answer B</label>
            <input id ="answer-b" type="text" placeholder="ko hutto" bind:value={fields.answerB}>
        </div>
   <button>Add Poll</button>
</form>

<style>
    .form-field{
        @apply flex flex-col
    }
</style>