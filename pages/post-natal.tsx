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
const PostNatal: React.FC<{ data: MainData }> = ({ data }) => {
    return (
        <Container logo={data.logo}>
            <Head>
                <title>Post Natal | Bloom Births</title>
            </Head>

            <Section
                reverse
                leftBackgroundColor={common.colors["skin-tone-1"]}
                rightBackgroundImage={data.body[1].primary.service_image.url}
                hideLeftOnSmall
                edge={{
                    backgroundColor: common.colors["skin-tone-1"],
                    horizontal: "right",
                    vertical: "bottom",
                    height: 500,
                }}
                height={500}
            >
                <AnimateIn
                    triggerOnce
                    className="relative sm:absolute bg-white bg-opacity-70 p-2 sm:p-16 mt-6 w-full sm:w-8/12 h-3/6 flex items-center justify-center content-center flex-col tracking-widest z-20 shadow-xl"
                >
                    <img src={data.logo.url} alt={data.logo.alt} width="80" className="mx-auto" />
                    <div className="text-skin-tone-3 uppercase text-2xl sm:text-6xl font-bold text-center font-primaryBold my-7">
                        <RichText render={data.body[1].primary.title} />
                    </div>
                </AnimateIn>
            </Section>

            <StyledList className="text-gray-800 text-lg text-justify font-primaryRegular w-1/3 mx-auto py-10">
                <RichText render={data.body[1].primary.description} />
                <div className="text-gray-600 text-lg text-justify font-primaryRegular mt-10">
                    <RichText render={data.body[1].primary.find_out_more} />
                </div>
            </StyledList>
        </Container>
    );
};

export default PostNatal;

export async function getStaticProps() {
    const landing = await Client().query(Prismic.Predicates.at("document.type", "min"));

    const { data } = landing.results[0];
    return {
        props: {
            data,
        },
    };
}
