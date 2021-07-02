import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

// ------------Theme for changing default black color and primary color---------
const lightTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fefe33",
      dark: "yellow",
    },
  },
});
const MyPagination = ({ totalPage, setPage }) => {
  const handlePageChange = (nextPage) => {
    setPage(nextPage);
    window.scroll(0, 0);
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <Pagination
        count={totalPage}
        variant="outlined"
        shape="rounded"
        color="primary"
        hideNextButton="true"
        hidePrevButton="true"
        onChange={(e) =>
          handlePageChange(e.target.textContent)
        }
      />
    </ThemeProvider>
  );
};

export default MyPagination;
