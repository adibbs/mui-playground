import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { create } from 'jss';
import { makeStyles, useTheme, jssPreset, StylesProvider } from '@material-ui/core/styles';

function FramedDemo(props) {
  const { children, document } = props;

  const theme = useTheme();
  React.useEffect(() => {
    document.body.dir = theme.direction;
  }, [document, theme.direction]);

  const { jss, sheetsManager } = React.useMemo(() => {
    return {
      jss: create({
        plugins: [...jssPreset().plugins],
        insertionPoint: document.head,
      }),
      sheetsManager: new Map(),
    };
  }, [document]);

  const getWindow = React.useCallback(() => document.defaultView, [document]);

  return (
    <StylesProvider jss={jss} sheetsManager={sheetsManager}>
      {React.cloneElement(children, {
        window: getWindow,
      })}
    </StylesProvider>
  );
}
FramedDemo.propTypes = {
  children: PropTypes.node,
  document: PropTypes.object.isRequired,
};

const useStyles = makeStyles(
  (theme) => ({
    frame: {
      backgroundColor: theme.palette.background.default,
      flexGrow: 1,
      height: 400,
      width: "100%",
      border: 'none',
      boxShadow: theme.shadows[1],
    },
  }),
  { name: 'DemoFrame' },
);

function DemoFrame(props) {
  const { children, ...other } = props;
  const classes = useStyles();
  /**
   * @type {import('react').Ref<HTMLIFrameElement>}
   */
  const frameRef = React.useRef(null);

  // If we portal content into the iframe before the load event then that content
  // is dropped in firefox.
  const [iframeLoaded, onLoad] = React.useReducer(() => true, false);

  React.useEffect(() => {
    const document = frameRef.current.contentDocument;
    // When we hydrate the iframe then the load event is already dispatched
    // once the iframe markup is parsed (maybe later but the important part is
    // that it happens before React can attach event listeners).
    // We need to check the readyState of the document once the iframe is mounted
    // and "replay" the missed load event.
    // See https://github.com/facebook/react/pull/13862 for ongoing effort in React
    // (though not with iframes in mind).
    if (document != null && document.readyState === 'complete' && !iframeLoaded) {
      onLoad();
    }
  }, [iframeLoaded]);

  const document = frameRef.current?.contentDocument;
  return (
    <React.Fragment>
      <iframe className={classes.frame} onLoad={onLoad} ref={frameRef} title="MUI Drawers" {...other} />
      {iframeLoaded !== false
        ? ReactDOM.createPortal(
          <FramedDemo document={document}>{children}</FramedDemo>,
          document.body,
        )
        : null}
    </React.Fragment>
  );
}

DemoFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Isolates the demo component as best as possible. Additional props are spread
 * to an `iframe` if `iframe={true}`.
 */
const DemoSandboxed = React.memo((props) => {
  const { component: Component, ...other } = props;

  return (
    <DemoFrame {...other}>
      <Component />
    </DemoFrame>
  );
});

DemoSandboxed.propTypes = {
  component: PropTypes.elementType.isRequired,
};

const withIframeContainer = (WrappedComponent, style = {}) => {
  const ContainedComponent = () => {
    return (
      <DemoSandboxed component={WrappedComponent} style={style} />
    )
  }

  return ContainedComponent;
};

export default withIframeContainer;