import { Container, Section } from "@components";
import { MainData } from "@interfaces/prismic-data";
import Prismic from "@prismicio/client";
import Head from "next/head";
import { Client } from "prismic-configuration";
import React from "react";
import { common } from "@definitions/styled-components";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const StyledParagraphs = styled.div`
    p {
        margin: 1em 0;
    }
`;
const About: React.FC<{ data: MainData }> = ({ data }) => {
    return (
        <Container logo={data.logo}>
            <Head>
                <title>About | Bloom Births</title>
            </Head>

            <Section
                reverse
                leftBackgroundColor={common.colors["skin-tone-3"]}
                rightBackgroundImage={data.about_image.url}
                rightHeight="h-screen"
                leftElement={
                    <div className="relative sm:absolute p-1 sm:p-10 w-full  flex flex-col items-center justify-center sm:items-start sm:justify-center h-5/6 tracking-widest">
                        <img src="/logo-clipped-light.png" alt={data.logo.alt} width="110" />
                        <div className="text-gray-200 uppercase text-6xl font-bold font-primaryBold my-6">
                            <RichText render={data.about_title} />
                        </div>
                    </div>
                }
                edge={{
                    backgroundColor: common.colors["skin-tone-3"],
                    horizontal: "right",
                    vertical: "bottom",
                }}
            />

            <StyledParagraphs className="text-gray-800 w-1/2 mx-auto py-20 text-lg font-primaryRegular text-justify">
                <RichText render={data.about_description} />
            </StyledParagraphs>
        </Container>
    );
};

export default About;

export async function getStaticProps() {
    const landing = await Client().query(Prismic.Predicates.at("document.type", "min"));

    const { data } = landing.results[0];
    return {
        props: {
            data,
        },
    };
}
