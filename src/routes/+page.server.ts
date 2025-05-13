import type { PageServerLoad } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = async () => {
	const seoData = {
		title: 'Home',
		description: 'Welcome to our website! We are glad to have you here.',
		image: 'https://example.com/image.jpg'
	};
	const user = db.selectFrom('user').select('id').where('id', '=', '0').execute;
	return {
		seoData,
		user
	};
};
