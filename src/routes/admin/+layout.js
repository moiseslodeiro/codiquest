export const prerender = true;
export const ssr = false;
export const trailingSlash = 'never';

export function load({ url }) {
	return {
		url: url.pathname
	};
}
