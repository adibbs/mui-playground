import {createMuiTheme} from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  props: {
    MuiMenu: {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
      }
    }
  }
});

export default customTheme;