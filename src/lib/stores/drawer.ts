import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { derived, get } from 'svelte/store';

function createDrawer() {
  const { subscribe } = derived(page, ($page) => {
    return $page.url.searchParams.get('drawer') || null;
  });

  return {
    subscribe,
    open: (slug: string) => {
      const url = get(page).url;
      const searchParams = new URLSearchParams(url.searchParams);
      searchParams.set('drawer', slug);

      goto(`${url.pathname}?${searchParams.toString()}`, { noScroll: true });
    },
    close: () => {
      const url = get(page).url;
      const searchParams = new URLSearchParams(url.searchParams);
      searchParams.delete('drawer');

      goto(`${url.pathname}?${searchParams.toString()}`, { noScroll: true });
    }
  };
}

export const drawer = createDrawer();
