import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
 /* {
    path: 'pokemon/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [];
    },
  },*/
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
