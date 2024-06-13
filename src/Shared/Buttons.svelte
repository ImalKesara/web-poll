<script lang="ts">
    export let colors = "sky";

    const COLORS : string ={
        "sky" : "bg-sky-500 hover:bg-sky-600 p-3 rounded-md text-white font-bold ease duration-300",
        "red" : "bg-red-500 hover:bg-red-600 p-3 rounded-md text-white font-bold ease duration-300",
        "purple" : "bg-purple-500 hover:bg-purple-600 p-3 rounded-md text-white font-bold ease duration-300",
        "orange" : "bg-orange-500 hover:bg-orange-600 p-3 rounded-md text-white font-bold ease duration-300",
    } 

    const getColor  = (color)=>{
        return COLORS[color] ?? COLORS["sky"];
    }

</script>

<button>
    <button  class="{getColor(colors)}"><slot></slot></button>
</button>

<style>

</style>