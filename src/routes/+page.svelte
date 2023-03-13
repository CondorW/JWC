<script lang="ts">
	import Card from '../components/Card.svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import Hero from '../components/Hero.svelte';
	import Projects from '../components/Projects.svelte';
	import SectionTwo from '../components/SectionTwo.svelte';
	import Statistics from '../components/Statistics.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import Features from '../components/Features.svelte';
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
	<div class="bg-base-100">
		<Hero />	
	</div>
	<div class="bg-base-100 my-24 px-6">
		<Features></Features>
	</div>
	<div class="bg-base-100 my-24 px-6">
		<Statistics></Statistics>
	</div>
	<div class="bg-base-100 my-24 px-6">
		<Projects></Projects>
	</div>
	<div class="bg-base-100 my-24 px-6">
		<Testimonials></Testimonials>
	</div>
	<div class="bg-base-100 my-24 px-6">
		<ContactForm></ContactForm>
	</div>
	
</div>
