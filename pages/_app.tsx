import "../src/styles/main.css";
import "tailwindcss/tailwind.css";

import { StyledThemeProvider } from "@definitions/styled-components";
import { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Component {...pageProps} />
        </StyledThemeProvider>
    );
}

export default MyApp;
