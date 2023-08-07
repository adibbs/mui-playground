import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        {routeComps.map(({ path, Component }) => <Route key={path} exact path={path} component={Component} />)}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}
export default Routes;

const routeComps = [
  { path: '/components/container', Component: lazy(() => import('./components/container')) },
  { path: '/components/grid', Component: lazy(() => import('./components/grid')) },
  { path: '/components/grid-list', Component: lazy(() => import('./components/grid-list')) },
  { path: '/components/hidden', Component: lazy(() => import('./components/hidden')) },
  { path: '/components/buttons', Component: lazy(() => import('./components/buttons')) },
  { path: '/components/button-group', Component: lazy(() => import('./components/button-group')) },
  { path: '/components/checkboxes', Component: lazy(() => import('./components/checkboxes')) },
  { path: '/components/floating-action-button', Component: lazy(() => import('./components/floating-action-button')) },
  { path: '/components/pickers', Component: lazy(() => import('./components/pickers')) },
  { path: '/components/radio-buttons', Component: lazy(() => import('./components/radio-buttons')) },
  { path: '/components/selects', Component: lazy(() => import('./components/selects')) },
  { path: '/components/slider', Component: lazy(() => import('./components/slider')) },
  { path: '/components/switches', Component: lazy(() => import('./components/switches')) },
  { path: '/components/text-fields', Component: lazy(() => import('./components/text-fields')) },
  { path: '/components/transfer-list', Component: lazy(() => import('./components/transfer-list')) },
  { path: '/components/bottom-navigation', Component: lazy(() => import('./components/bottom-navigation')) },
  { path: '/components/breadcrumbs', Component: lazy(() => import('./components/breadcrumbs')) },
  { path: '/components/drawers', Component: lazy(() => import('./components/drawers')) },
  { path: '/components/links', Component: lazy(() => import('./components/links')) },
  { path: '/components/menus', Component: lazy(() => import('./components/menus')) },
  { path: '/components/steppers', Component: lazy(() => import('./components/steppers')) },
  { path: '/components/tabs', Component: lazy(() => import('./components/tabs')) },
  { path: '/components/app-bar', Component: lazy(() => import('./components/app-bar')) },
  { path: '/components/paper', Component: lazy(() => import('./components/paper')) },
  { path: '/components/cards', Component: lazy(() => import('./components/cards')) },
  { path: '/components/accordion', Component: lazy(() => import('./components/accordion')) },
  { path: '/components/progress', Component: lazy(() => import('./components/progress')) },
  { path: '/components/dialogs', Component: lazy(() => import('./components/dialogs')) },
  { path: '/components/snackbars', Component: lazy(() => import('./components/snackbars')) },
  { path: '/components/backdrop', Component: lazy(() => import('./components/backdrop')) },
  { path: '/components/avatars', Component: lazy(() => import('./components/avatars')) },
  { path: '/components/badges', Component: lazy(() => import('./components/badges')) },
  { path: '/components/chips', Component: lazy(() => import('./components/chips')) },
  { path: '/components/dividers', Component: lazy(() => import('./components/dividers')) },
  { path: '/components/icons', Component: lazy(() => import('./components/icons')) },
  { path: '/components/lists', Component: lazy(() => import('./components/lists')) },
  { path: '/components/tables', Component: lazy(() => import('./components/tables')) },
  { path: '/components/tooltips', Component: lazy(() => import('./components/tooltips')) },
  { path: '/components/typography', Component: lazy(() => import('./components/typography')) },
  { path: '/components/modal', Component: lazy(() => import('./components/modal')) },
  { path: '/components/popover', Component: lazy(() => import('./components/popover')) },
  { path: '/components/popper', Component: lazy(() => import('./components/popper')) },
  { path: '/components/portal', Component: lazy(() => import('./components/portal')) },
  { path: '/components/textarea-autosize', Component: lazy(() => import('./components/textarea-autosize')) },
  { path: '/components/transitions', Component: lazy(() => import('./components/transitions')) },
  { path: '/components/alert', Component: lazy(() => import('./components/alert')) },
  { path: '/components/pagination', Component: lazy(() => import('./components/pagination')) },
  { path: '/components/rating', Component: lazy(() => import('./components/rating')) },
  { path: '/components/skeleton', Component: lazy(() => import('./components/skeleton')) },
  { path: '/components/speed-dial', Component: lazy(() => import('./components/speed-dial')) },
  { path: '/components/timeline', Component: lazy(() => import('./components/timeline')) },
  { path: '/components/toggle-button', Component: lazy(() => import('./components/toggle-button')) },
  { path: '/components/tree-view', Component: lazy(() => import('./components/tree-view')) },
];
