import { makeStyles } from "@material-ui/core";
// import { blue, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "#ffffff",
      backgroundColor: "#dbaa37",
    },

    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "#efefef",
      boxSizing: "border-box",
      padding: "70px 24px 24px 270px",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
    },
    logo: {
      lineHeight: "47px",
      color: "inherit",
    },

    // navbar styles

    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
    },
    brandBox: {
      display: "flex",
      flexFlow: "row wrap",
    },
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      // marginTop: "64px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },

    navlink: {
      color: "#ffffff",
      transition: "0.8s",
      "&:hover  div": {
        color:"#ffffff",
      },
    },
    navButton: { width: "100%", textTransform: "capitalize" },
    selectedNav: {
      color: `#ffffff`,
      fontWeight: " bolder",
      " & div": {
        color: `#ffffff`,
      },
    },
  };
});
