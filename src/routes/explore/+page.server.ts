import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const seoData = {
		title: 'Explore Themes',
		description: 'Discover a new VS Code theme from public user themes.',
		image: 'https://example.com/explore-image.jpg'
	};

	return {
		seoData
	};
};
