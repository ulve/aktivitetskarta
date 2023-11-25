<script lang="ts">
	import aktiviteter from '$lib/aktiviteter';
	import Header from '$lib/Header.svelte';
</script>

<Header />
<div class="container" id="känslor">
	{#each aktiviteter as aktivitet}
		<div class="aktivitet">
			<img src={aktivitet.img} alt={aktivitet.title} />
			<h2>{aktivitet.title}</h2>
		</div>
	{/each}
</div>

<style>
	h2 {
		font-size: 2.4em;
		line-height: 1.1;
		text-align: center;
	}

	.container {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		background-color: white;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		padding: 4rem;
		justify-content: center;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	.aktivitet {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-grow: 1;
		max-width: 20rem;
		border: 2px solid #454545;
		border-radius: 1rem;
		padding: 1rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
		background-color: white;
	}
</style>
