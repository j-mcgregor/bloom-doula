import { Container, Section } from "@components";
import { MainData } from "@interfaces/prismic-data";
import Prismic from "@prismicio/client";
import Head from "next/head";
import { Client } from "prismic-configuration";
import React from "react";
import { common } from "@definitions/styled-components";
import { RichText } from "prismic-reactjs";

const PostNatal: React.FC<{ data: MainData }> = ({ data }) => {
    return (
        <Container logo={data.logo}>
            <Head>
                <title>Post Natal Doula | Bloom Births</title>
            </Head>
            <Section
                leftBackgroundColor={common.colors["skin-tone-2"]}
                rightBackgroundColor={common.colors["skin-tone-3"]}
                hideLeftOnSmall
                rightWidth="w-full sm:w-1/2"
                edge={{
                    backgroundColor: common.colors["skin-tone-3"],
                    horizontal: "left",
                    vertical: "top",
                }}
            >
                <div className="relative sm:absolute bg-white p-2 sm:p-20 mt-6 w-full sm:w-10/12 h-5/6 flex justify-start content-center flex-col tracking-widest z-20">
                    <img src={data.logo.url} alt={data.logo.alt} width="80" className="mx-auto" />
                    <div className="text-gray-800 uppercase text-2xl sm:text-6xl font-bold text-center font-primaryBold my-7">
                        <RichText render={data.body[1].primary.title} />
                    </div>
                    <div className="text-gray-800 text-lg text-justify font-primaryRegular">
                        <RichText render={data.body[1].primary.description} />
                    </div>
                    <div className="text-gray-600 text-lg text-justify font-primaryRegular mt-10">
                        <RichText render={data.body[1].primary.find_out_more} />
                    </div>
                </div>
            </Section>
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
