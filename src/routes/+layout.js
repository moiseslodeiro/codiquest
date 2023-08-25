export const prerender = true;
export const trailingSlash = 'ignore';

export function load({ url }) {
    return {
        url: url.pathname,
    }
}

