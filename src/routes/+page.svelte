<script lang="ts">
	import ContactSection from '../components/ContactSection.svelte';
	import Hero from '../components/Hero.svelte';
	import Projects from '../components/Projects.svelte';
	import Statistics from '../components/Statistics.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import Features from '../components/Features.svelte';
	import StickyButton from '../components/StickyButton.svelte';
	import Team from '../components/Team.svelte';
</script>

<div>
	<div id="TOPMAN" class="bg-base-100">
		<Hero />	
	</div>
	<div id="FeatureSec" class="bg-base-100 my-64 px-6">
		<Features></Features>
	</div>
	<div class="bg-base-100 my-64 px-6">
		<Statistics></Statistics>
	</div>
	<div class="bg-base-100 my-64 px-6">
		<Projects></Projects>
	</div>
	<div class="bg-base-100 my-64 px-6">
		<Testimonials></Testimonials>
	</div>
	<div class="bg-base-100 my-64 px-6">
		<Team></Team>
	</div>
	<div class="bg-base-100 my-64 px-6">
		<ContactSection></ContactSection>
	</div>
	<StickyButton></StickyButton>
</div>
