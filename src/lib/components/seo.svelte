<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		title?: string;
		description?: string;
		image?: string;
	};

	let { title = 'Hex', description = '', image = '' }: Props = $props();
</script>

<svelte:head>
	<title>{title} | Hex</title>
	<meta name="description" content={description} />
	<meta property="og_site_name" content="https://hex.dev{page.url.pathname.toString()}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="“example.com" />
	<meta property="twitter:url" content="https://www.hex.dev{page.url.pathname.toString()}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{@html `  <script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${title} | example.com",
   "url": "https://www.hex.dev${page.url.pathname}",
   "logo": ${image}  }</script>`}
</svelte:head>
