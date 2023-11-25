<header class="header">
	<div class="tabs">
		<a data-tab="allt" class="active" href="">Allt</a>
	</div>
</header>

<style>
	.header {
		padding: 4rem 4rem 0;
		background: #866aea;
	}

	.tabs a {
		text-decoration: none;
		background: #c2b4f4;
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 0.5em 0.5em 0 0;
		color: black;
		margin: 0 2px;
		position: relative;
	}

	.tabs a::after,
	.tabs a::before {
		content: '';
		position: absolute;
		bottom: 0;
		height: 10px;
		width: 10px;
		z-index: 1;
	}

	.tabs a::after {
		left: 100%;
		background-image: radial-gradient(
			circle at top right,
			transparent,
			transparent 10px,
			#c2b4f4 10px,
			#c2b4f4 50px
		);
	}

	.tabs a::before {
		right: 100%;
		background-image: radial-gradient(
			circle at top left,
			transparent,
			transparent 10px,
			#c2b4f4 10px,
			#c2b4f4 50px
		);
	}

	.tabs .active {
		background: #f0f0f0;
		z-index: 10;
		pointer-events: none;
	}

	.tabs .active::after {
		background-image: radial-gradient(
			circle at top right,
			transparent,
			transparent 10px,
			#f0f0f0 10px,
			#f0f0f0 50px
		);
	}

	.tabs .active::before {
		background-image: radial-gradient(
			circle at top left,
			transparent,
			transparent 10px,
			#f0f0f0 10px,
			#f0f0f0 50px
		);
	}
</style>
