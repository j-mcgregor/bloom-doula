import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../src/styles/main.css";
import { StyledThemeProvider } from "@definitions/styled-components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Component {...pageProps} />
        </StyledThemeProvider>
    );
}

export default MyApp;
