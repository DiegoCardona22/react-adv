import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface IRoute {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; 
  name: string;
  path: string;
  to: string;
}

const LazyLayout = lazy(() => import( /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"));
const NoLazy = lazy(() => import( /* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/NoLazy"));

export const routes: IRoute[] = [
  {
    Component: LazyLayout,
    name: 'Lazy-layout',
    path: '/lazy-load/*',
    to: '/lazy-load/'
  },
  {
    Component: NoLazy,
    name: 'No-Lazy',
    path: 'no-lazy',
    to: '/no-lazy'
  }
];