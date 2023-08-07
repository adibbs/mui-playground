import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AppDrawerNavItem from './NavItem';
// import PropTypes from "prop-types"
import pages from './pages';

function pageToTitle(page) {
  if (page.title === false) {
    return null;
  }

  if (page.title) {
    return page.title;
  }

  const path = page.subheader || page.pathname;
  const name = path.replace(/.*\//, '');

  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); // title case
}

const styles = (theme) => ({
  paper: {
    width: 240,
    backgroundColor: theme.palette.background.level1,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  // https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

function renderNavItems(options) {
  const { pages, ...params } = options;

  return (
    <List>
      {pages.reduce(
        // eslint-disable-next-line no-use-before-define
        (items, page) => reduceChildRoutes({ items, page, ...params }),
        [],
      )}
    </List>
  );
}

function reduceChildRoutes({ props, activePage, items, page, depth, t }) {
  if (page.displayNav === false) {
    return items;
  }

  if (page.children && page.children.length > 1) {
    const title = pageToTitle(page, t);
    const topLevel = activePage ? activePage.pathname.indexOf(`${page.pathname}/`) === 0 : false;

    items.push(
      <AppDrawerNavItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        topLevel={topLevel && !page.subheader}
        openImmediately={topLevel || Boolean(page.subheader)}
        title={title}
      >
        {renderNavItems({ props, pages: page.children, activePage, depth: depth + 1, t })}
      </AppDrawerNavItem>,
    );
  } else {
    const title = pageToTitle(page, t);
    page = page.children && page.children.length === 1 ? page.children[0] : page;

    items.push(
      <AppDrawerNavItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        title={title}
        href={page.pathname}
        onClick={props.onClose}
      />
    );
  }

  return items;
}

function AppDrawer(props) {
  const activePage = ""; // came from PageContext

  return (
    <>
      {renderNavItems({ props, pages, activePage, depth: 0, t: {} })}
    </>
  );
}

// AppDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   disablePermanent: PropTypes.bool.isRequired,
//   mobileOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onOpen: PropTypes.func.isRequired,
// };

export default withStyles(styles)(AppDrawer);
