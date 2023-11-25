<script lang="ts">
	import aktiviteter from '$lib/aktiviteter';
	import Header from '$lib/Header.svelte';
	// aktiviteter where tile no Valle or Pappa
	const aktiviteterFiltered = aktiviteter.filter(
		(aktivitet) => aktivitet.title !== 'Valle' && aktivitet.title !== 'Pappa'
	);
	let selectedAktivitet = aktiviteterFiltered[0];

	// on click on aktivitet
	function click(aktivitet: any) {
		console.log(aktivitet);
		selectedAktivitet = aktivitet;
		// show vem
		const aktiviteterElement = document.getElementById('aktiviteter');
		if (aktiviteterElement) {
			aktiviteterElement.style.display = 'none';
		}
		const vemElement = document.getElementById('vem');
		if (vemElement) {
			vemElement.style.display = 'flex';
		}
	}

	function clack() {
		// show vem
		const aktiviteterElement = document.getElementById('aktiviteter');
		if (aktiviteterElement) {
			aktiviteterElement.style.display = 'flex';
		}
		const vemElement = document.getElementById('vem');
		if (vemElement) {
			vemElement.style.display = 'none';
		}
	}
</script>

<Header />
<div class="container" id="aktiviteter">
	{#each aktiviteterFiltered as aktivitet}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="aktivitet" on:click={() => click(aktivitet)}>
			{#if aktivitet.favorite}
				<img src="crown.png" alt="Är favoriten" class="favorite" />
			{/if}
			<img src={aktivitet.img} alt={aktivitet.title} />
			<h2>{aktivitet.title}</h2>
		</div>
	{/each}
</div>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container" id="vem" style="display:none">
	<div class="aktivitet" on:click={clack}>
		<img src={selectedAktivitet.img} alt={selectedAktivitet.title} />
		<h2>{selectedAktivitet.title}</h2>
	</div>

	<div class="aktivitet" on:click={clack}>
		<img src="valle.png" alt="Valle" />
		<h2>Själv</h2>
	</div>
	<div class="aktivitet" on:click={clack}>
		<img src="pappa.png" alt="Pappa" />
		<h2>Med pappa</h2>
	</div>
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
	.favorite {
		position: absolute;
		top: -5rem;
		left: -4rem;
		width: 8rem;
		height: 8rem;
		transform: rotate(-10deg);
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
		position: relative;
	}
</style>
