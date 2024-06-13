<script lang="ts">
  import Footer from './Components/Footer/Footer.svelte';
  import Header from './Components/Header/Header.svelte';
  import Tabs from './Shared/Tabs.svelte';
  import './app.css';

  let items = ['Current Polls' ,'Add New Polls'];
  let activeItem = 'Current Polls';

</script>




<Header />
<main>
  <!-- you case use shorthand {items} like this -->
  <Tabs items= {items} activeItem = {activeItem} />
</main>
<Footer />


<style>
  main{
    max-width: 960px;
    margin: 1em auto;
  }

</style>