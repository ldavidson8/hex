<script lang="ts">
	import Seo from '$lib/components/seo.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Seo title={data.seoData.title} description={data.seoData.description} image={data.seoData.image} />

<section>
	<h1>Explore Our Content</h1>
	<p>This is the explore page. Browse through our curated collections.</p>
</section>
