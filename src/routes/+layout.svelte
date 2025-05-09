<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import '@fontsource/ibm-plex-mono';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<Header />
{@render children()}
