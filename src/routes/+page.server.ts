import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const seoData = {
		title: 'Home',
		description: 'Welcome to our website! We are glad to have you here.',
		image: 'https://example.com/image.jpg'
	};

	return {
		seoData
	};
};
