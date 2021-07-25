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

const StyledList = styled.div`
    ul {
        list-style: circle;

        li {
            padding: 8px 0;
        }
    }
`;

const BirthDoula: React.FC<{ data: MainData }> = ({ data }) => {
    return (
        <Container logo={data.logo}>
            <Head>
                <title>Birth Doula | Bloom Doula</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Bloom Doula" />
                <meta property="og:url" content="http://www.bloomdoula.co.uk/birth-doula" />
                <meta property="og:description" content="To enter motherhood from the best possible place" />
            </Head>

            <Section
                reverse
                leftBackgroundColor={common.colors["skin-tone-2"]}
                rightBackgroundImage={data.body[0].primary.service_image.url}
                hideLeftOnSmall
                edge={{
                    backgroundColor: common.colors["skin-tone-2"],
                    horizontal: "right",
                    vertical: "bottom",
                    height: 500,
                }}
                height={500}
                heightOnSmall={300}
            >
                <AnimateIn
                    triggerOnce
                    className="absolute bg-white bg-opacity-70 p-2 sm:p-16 sm:mt-6 w-full sm:w-8/12 h-full sm:h-3/6 flex items-center justify-center content-center flex-col tracking-widest z-20 sm:shadow-xl shadow-none"
                >
                    <img src={data.logo.url} alt={data.logo.alt} width="80" className="mx-auto" />
                    <div className="text-skin-tone-3 uppercase text-2xl sm:text-6xl font-bold text-center font-primaryBold my-7">
                        <RichText render={data.body[0].primary.title} />
                    </div>
                </AnimateIn>
            </Section>

            <StyledList className="text-gray-900 font-bold text-lg text-left font-primaryRegular sm:w-1/3 w-full p-10 mx-auto py-10">
                <RichText render={data.body[0].primary.description} />
                <div className="text-gray-800 text-lg text-left font-primaryRegular mt-10">
                    <RichText render={data.body[0].primary.find_out_more} />
                </div>
            </StyledList>
        </Container>
    );
};

export default BirthDoula;

export async function getStaticProps() {
    const landing = await Client().query(Prismic.Predicates.at("document.type", "min"));

    const { data } = landing.results[0];
    return {
        props: {
            data,
        },
    };
}
