<script lang="ts">
	import Card from '../components/Card.svelte';
	import Hero from '../components/Hero.svelte';
	interface cardData {
		title: string;
		content: string;
		id: number;
	}
	interface data {
		allCards: Array<cardData>;
	}
	export let data: data;
	console.log(data.allCards);
	
</script>

<div>
	<!-- {#each data.allCards as singleData (singleData.id)}
		<Card {...singleData}/>
	{/each} -->
	<div class="flex bg-gray-800 h-screen items-center justify-center">
		<Hero></Hero>
		<!-- <div class="flex flex-col bg-red-300 text-center">
		  <p>A Full-Service AirBNB Experince</p>
		  <div class="divider"></div>
		  <p>We truly think of everything</p>
		</div> -->
	  </div>
	  <div class="bg-gray-600 h-screen">
	  </div>
	

</div>
