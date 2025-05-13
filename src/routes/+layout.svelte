<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import '@fontsource/ibm-plex-mono';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<ModeWatcher />
<Header />
{@render children()}
