import { Navbar, Footer } from "@components";
import { ImageIF } from "@interfaces/prismic-data";
import React from "react";

export const Container: React.FC<{ logo: ImageIF }> = ({ children, logo }) => (
    <div className="min-h-screen flex flex-col">
        <Navbar logo={logo} />
        {children}
        <Footer />
    </div>
);
