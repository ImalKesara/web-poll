<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Buttons from '../../Shared/Buttons.svelte';
  import { v4 as uuidv4 } from 'uuid';

  const dispatch = createEventDispatcher();
  let valid: boolean = false; //when form going to valid this will become true
  let fields = {
    Question: '',
    answerA: '',
    answerB: '',
  };

  let errors = {
    Question: '',
    answerA: '',
    answerB: '',
  };

  const submitHandle = () => {
    //Question --
    valid = true;
    if (fields.Question.trim().length < 5) {
      valid = false;
      errors.Question = 'Question must be atleast five characters long';
    } else {
      errors.Question = '';
    }

    //Answer A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = 'Answer must be atleast one characters long';
    } else {
      errors.answerA = '';
    }

    //Answer B

    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'Answer must be atleast one characters long';
    } else {
      errors.answerB = '';
    }

    if (valid) {
      console.log(fields);
      let poll = { ...fields, voteA: 0, voteB: 0, id: uuidv4() };
      dispatch('store', poll);
    }

    // fields.Question = '';
    // fields.answerA = '';
    // fields.answerB = '';
  };
</script>

<form on:submit|preventDefault={submitHandle} class="w-4/5 m-auto">
  <div class="form-field">
    <label for="question">Poll Question :</label>
    <input
      id="question"
      type="text"
      placeholder="Question"
      bind:value={fields.Question}
    />
    <div class="error">{errors.Question}</div>
  </div>

  <div class="form-field">
    <label for="answer-a">Answer A :</label>
    <input
      id="answer-a"
      type="text"
      placeholder="Answer A"
      bind:value={fields.answerA}
    />
    <div class="error">{errors.answerA}</div>
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B :</label>
    <input
      id="answer-b"
      type="text"
      placeholder="Answer B"
      bind:value={fields.answerB}
    />
    <div class="error">{errors.answerB}</div>
  </div>

  <div class="flex justify-center">
    <Buttons colors="purple">Add Poll</Buttons>
  </div>
</form>

<style>
  .form-field {
    @apply flex flex-col my-5 ease-out duration-300;
  }
  label {
    @apply py-3;
  }
  input {
    @apply h-10 border-2 p-2 rounded-md;
  }

  .error {
    @apply text-red-400 font-bold;
  }
</style>
