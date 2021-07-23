import { Container, Section } from "@components";
import { MainData } from "@interfaces/prismic-data";
import Prismic from "@prismicio/client";
import Head from "next/head";
import { Client } from "prismic-configuration";
import React from "react";
import { common } from "@definitions/styled-components";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { AnimateIn } from "@components/AnimateIn";

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
                backgroundPosition="center 30%"
                leftElement={
                    <AnimateIn
                        className="relative sm:absolute p-1 sm:p-10 w-full flex flex-col items-center sm:items-start justify-center h-full sm:h-5/6 tracking-widest"
                        triggerOnce
                    >
                        <div className="flex flex-col items-center sm:items-start">
                            <img src="/logo-clipped-light.png" alt={data.logo.alt} className="w-16 sm:w-32" />
                            <div className="text-gray-200 uppercase text-2xl sm:text-6xl font-bold font-primaryBold my-6">
                                <RichText render={data.about_title} />
                            </div>
                        </div>
                    </AnimateIn>
                }
                edge={{
                    backgroundColor: common.colors["skin-tone-3"],
                    horizontal: "right",
                    vertical: "bottom",
                    height: 500,
                    hideOnSmall: true,
                }}
                height={500}
                heightOnSmall={250}
            />

            <StyledParagraphs className="text-gray-800 w-full sm:w-1/2 mx-auto p-5 sm:py-20 text-lg font-primaryRegular text-justify">
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
