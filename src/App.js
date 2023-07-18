import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./pages/Home";
import { createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e67e22",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
        size: "small",
        sx: { backgroundColor: "#fff", borderRadius: "0.25rem" },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "small",
        color: "primary",
        sx: {
          p: "0.25rem 2rem",
          color: "#fff",
          textTransform: "none",
          "&:disabled": {
            color: "#ffffff9c",
          },
        },
      },
    },
  },
});

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="colored"
    />
  </>
);
export default App;
