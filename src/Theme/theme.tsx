import { createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    KTHblue: string,
    KTHindigo: string,
    KTHpurple: string,
    KTHpink: string,
    KTHred: string,
    KTHorange: string,
    KTHyellow: string,
    KTHgreen: string,
    KTHteal: string,
    KTHcyan: string,
    KTHwhite: string,
    KTHgray: string,
    KTHgrayDark: string,
    KTHprimary: string,
    KTHsecondary: string,
    KTHsuccess: string,
    KTHinfo: string,
    KTHwarning: string,
    KTHdanger:string,
    KTHlight: string,
    KTHdark: string,
  }
}

export const theme = createTheme({
  palette: {
    common: {
      KTHblue: "#007fae",
      KTHindigo: "#6610f2",
      KTHpurple: "#6f42c1",
      KTHpink: "#d02f80",
      KTHred: "#d4351c",
      KTHorange: "#fd7e14",
      KTHyellow: "#ffc107",
      KTHgreen: "#528400",
      KTHteal: "#20c997",
      KTHcyan: "#17a2b8",
      KTHwhite: "#fff",
      KTHgray: "#6c757d",
      KTHgrayDark: "#343a40",
      KTHprimary: "#007fae",
      KTHsecondary: "#fff",
      KTHsuccess: "#528400",
      KTHinfo: "#17a2b8",
      KTHwarning: "#ffc107",
      KTHdanger: "#d4351c",
      KTHlight: "#f8f9fa",
      KTHdark: "#343a40",
    },
    primary: {
      main: "#007fae",
    },
    secondary: {
      main: "#17a2b8",
    },
    error: {
      main: "#d4351c",
    },
  },
  typography: {
    fontFamily: ["Arial", "sans-serif"].join(","),
    h1: {
      fontSize: 68,
    },
    h3: {
      fontSize: 40,
    },
    h4: {
      fontSize: 32,
    },
   
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.25rem",
          borderColor: "#007fae",
            
            color: "#fff",
          
          fontWeight: 700,
        },
      },
    },
  },
 
});
