<script lang="ts">
	interface cardData{
		title: string;
		content: string;
		id: string;
	}
	interface data {
		allCards: Array<cardData>
	}
	

	import Card from '../components/Card.svelte';

	export let data: data;
	console.log(data.allCards);
	data.allCards.map((x: object) => {});
</script>

<div>
	{#each data.allCards as singleData, i}
	<Card title={singleData.title}></Card>
	{/each}

	
</div>
