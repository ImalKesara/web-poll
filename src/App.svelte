<script lang="ts">
  import CreatePollForm from './Components/CreatePollForm/CreatePollForm.svelte';
  import Footer from './Components/Footer/Footer.svelte';
  import Header from './Components/Header/Header.svelte';
  import Tabs from './Shared/Tabs.svelte';
  import './app.css';

  let items = ['Current Polls' ,'Add New Polls'];
  let activeItem = 'Current Polls';

  function tabChange(e){
    activeItem = e.detail
    console.log('tag changed')
  }

</script>




<Header />
<main>
  <!-- you case use shorthand {items} like this -->
  <Tabs items= {items} activeItem = {activeItem}  on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <p>Current poll here</p>
  {:else if activeItem === "Add New Polls"}
    <CreatePollForm />
  {/if}
</main>
<Footer />


<style>
  main{
    max-width: 960px;
    margin: 1em auto;
  }

</style>