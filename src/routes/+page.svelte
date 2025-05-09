<script lang="ts">
	import MonacoEditor from '$lib/components/monaco-editor/MonacoEditor.svelte';
	import Seo from '$lib/components/seo.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const code = `console.log("Hello, World!");`;
</script>

<Seo title={data.seoData.title} description={data.seoData.description} image={data.seoData.image} />

<section class="p-2">
	<div class="h-[600px] w-full border border-neutral-700 p-1">
		<MonacoEditor source={code} showLineNumbers={true} wrap={false} lang="javascript" />
	</div>
</section>
