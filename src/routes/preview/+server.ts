import { PREVIEW_COOKIE_KEY } from '$lib/constants';
import { sanitizeSlug } from '$lib/utils/paths';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, cookies }) => {
  const path = sanitizeSlug(url.searchParams.get('path') || '/');

  url.searchParams.delete('path');

  cookies.set(PREVIEW_COOKIE_KEY, 'true', {
    path: '/',
    secure: true,
    sameSite: 'none'
  });

  // preserve storyblok's query params
  throw redirect(307, `${path}?${url.searchParams.toString()}`);
};
