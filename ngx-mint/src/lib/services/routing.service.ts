/**
 * Imports
 */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { mintItem } from '@appartmint/mint';

/**
 * Routing Service
 * @description Service for managing routing
 */
@Injectable({
  providedIn: 'root'
})
export class MintRoutingService {
  /**
   * Url prefixes to ignore
   */
  private _ignorePrefixes: string[] = [
    '**',
    'admin',
    'test',
    'error'
  ];

  /**
   * Navigation routes
   */
  routes: mintItem[] = [];
    
  /**
   * Generate the route structure from the app-routing module 
   * @param router - Router 
   * @param route - ActivatedRoute
   */
  constructor (
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.routes = this.router.config
      .filter(this.filterRoutes)
      .map(this.mapRoutes)
      .sort(this.sortRoutes)
      .reduce(this.reduceRoutes, []);
  }

  /**
   * Filter out unwanted routes
   * @note use with the Array.filter function
   * @param route - Route to filter
   * @returns Whether or not the route should be filtered out
   */
  private filterRoutes (route: Route): boolean {
    return this._ignorePrefixes.some(prefix => {
      return route.path?.startsWith(prefix);
    }) && Boolean(route.title);
  }

  /**
   * Map routes to items
   * @note use with the Array.map function
   * @param route - Route to map
   */
  private mapRoutes (route: Route): mintItem {
    const items: mintItem[] = [];
    route.data?.presets?.forEach((preset: string) => {
      const path = route.path?.replace(/:.+$/, preset);
      items.push({
        href: path,
        routerLink: `/${path}`.split('/'),
        title: route.title?.toString(),
        items: []
      });
    });
    
    return {
      href: route.path,
      routerLink: `/${route.path}`.split('/'),
      title: route.title?.toString(),
      items: items
    };
  }

  /**
   * Sort the routes
   * @note use with the Array.sort function
   * @param a - First route to sort
   * @param b - Second route to sort
   * @returns Sort order
   * @todo Sort by priority
   */
  private sortRoutes (a: mintItem, b: mintItem): number {
    return a.href?.localeCompare(b.href || '') || -1;
  }

  /**
   * Reduce route items into a tree
   * @note use with the Array.reduce function
   * @param routes - Routes already reduced
   * @param route - Route to reduce
   * @returns A reduced list of routes
   */
  private reduceRoutes (routes: mintItem[], route: mintItem): mintItem[] {
    routes.find(r => {
      return r.routerLink?.toString() === route.routerLink?.slice(0, -1).toString();
    })?.items?.push(route) || routes.push(route);
    return routes;
  }
}
