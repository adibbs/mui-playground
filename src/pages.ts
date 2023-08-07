const pages = [
  {
    pathname: '/components',
    subheader: '/components/layout',
    children: [
      { pathname: '/components/container', },
      { pathname: '/components/grid', },
      { pathname: '/components/grid-list', },
      { pathname: '/components/hidden', },
    ],
  },
  {
    pathname: '/components',
    subheader: '/components/inputs',
    children: [
      { pathname: '/components/buttons', },
      { pathname: '/components/button-group', },
      { pathname: '/components/checkboxes', },
      { pathname: '/components/floating-action-button', },
      { pathname: '/components/pickers', title: 'Date / Time', },
      { pathname: '/components/radio-buttons', },
      { pathname: '/components/selects', },
      { pathname: '/components/slider', },
      { pathname: '/components/switches', },
      { pathname: '/components/text-fields', },
      { pathname: '/components/transfer-list', },
    ],
  },
  {
    pathname: '/components',
    subheader: '/components/navigation',
    children: [
      { pathname: '/components/bottom-navigation', },
      { pathname: '/components/breadcrumbs', },
      { pathname: '/components/drawers', },
      { pathname: '/components/links', },
      { pathname: '/components/menus', },
      { pathname: '/components/steppers', },
      { pathname: '/components/tabs', },
    ],
  },
  {
    pathname: '/components',
    subheader: '/components/surfaces',
    children: [
      { pathname: '/components/app-bar', },
      { pathname: '/components/paper', },
      { pathname: '/components/cards', },
      { pathname: '/components/accordion', },
    ],
  },
  {
    pathname: '/components',
    subheader: '/components/feedback',
    children: [
      { pathname: '/components/progress', },
      { pathname: '/components/dialogs', },
      { pathname: '/components/snackbars', },
      { pathname: '/components/backdrop', },
    ],
  },
  {
    pathname: '/components',
    subheader: '/components/data-display',
    children: [
      { pathname: '/components/avatars', },
      { pathname: '/components/badges', },
      { pathname: '/components/chips', },
      { pathname: '/components/dividers', },
      { pathname: '/components/icons', },
      { pathname: '/components/lists', },
      { pathname: '/components/tables', },
      { pathname: '/components/tooltips', },
      { pathname: '/components/typography', },
    ],
  },
  {
    pathname: '/components',
    subheader: '/components/utils',
    children: [
      { pathname: '/components/modal', },
      { pathname: '/components/popover', },
      { pathname: '/components/popper', },
      { pathname: '/components/portal', },
      { pathname: '/components/textarea-autosize', },
      { pathname: '/components/transitions', },
    ],
  },
  {
    pathname: '/components',
    subheader: '/components/lab',
    children: [
      { pathname: '/components/alert', },
      { pathname: '/components/pagination', },
      { pathname: '/components/rating', },
      { pathname: '/components/skeleton', },
      { pathname: '/components/speed-dial', },
      { pathname: '/components/timeline', },
      { pathname: '/components/toggle-button', },
      { pathname: '/components/tree-view', },
    ],
  },
];

export default pages;