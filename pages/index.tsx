import { Container, Section } from "@components";
import { AnimateIn } from "@components/AnimateIn";
import { common } from "@definitions/styled-components";
import { MainData } from "@interfaces/prismic-data";
import Prismic from "@prismicio/client";
import Head from "next/head";
import Link from "next/link";
import { Client } from "prismic-configuration";
import { RichText } from "prismic-reactjs";
import React from "react";

const Home: React.FC<{ data: MainData }> = ({ data }) => {
    return (
        <Container logo={data.logo}>
            <Head>
                <title>Bloom Doula</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Bloom Doula" />
                <meta property="og:url" content="http://www.bloomdoula.co.uk/" />
                <meta property="og:description" content="To enter motherhood from the best possible place" />
            </Head>
            <Section
                leftBackgroundImage={data.primary_image.url}
                leftHeight="h-screen"
                rightBackgroundColor={common.colors["skin-tone-2"]}
                hideRightOnSmall
                edge={{
                    backgroundColor: common.colors["skin-tone-2"],
                    horizontal: "left",
                    vertical: "top",
                    height: 800,
                }}
                height={800}
                heightOnSmall={500}
                equalWidth
            >
                <AnimateIn
                    triggerOnce
                    className="absolute bg-white bg-opacity-80 p-10 h-full sm:h-1/2 w-full sm:w-8/12 flex justify-center items-center flex-col text-center tracking-widest z-30 shadow-md"
                >
                    <img src={data.logo.url} alt={data.logo.alt} width="150" className="mx-auto" />
                    <div className="text-skin-tone-3 uppercase text-4xl sm:text-7xl font-bold font-primaryBold tracking-widest my-10">
                        <RichText render={data.primary_title} />
                    </div>
                    <div className="text-gray-600 uppercase text-lg sm:text-xl font-bold font-primaryRegular">
                        <RichText render={data.primary_subtitle} />
                    </div>
                </AnimateIn>
            </Section>
            <div className="min-h-screen flex items-center justify-center shadow-inner p-10">
                <AnimateIn triggerOnce>
                    <div className="max-w-3xl">
                        <div className="text-skin-tone-3 uppercase text-2xl font-bold font-primaryBold tracking-widest my-10 ">
                            <RichText render={data.summary_title} />
                        </div>
                        <div className="text-gray-600 uppercase text-lg sm:text-xl font-bold font-primaryRegular sm:leading-10">
                            <RichText render={data.summary_description} />
                        </div>
                    </div>
                </AnimateIn>
            </div>
            <Section
                leftBackgroundColor={common.colors["skin-tone-1"]}
                rightBackgroundColor={common.colors["skin-tone-3"]}
                hideLeftOnSmall
                hideRightOnSmall
                rightHeight="h-10"
                rightWidth="w-full sm:w-1/2"
                edge={{
                    backgroundColor: common.colors["skin-tone-1"],
                    horizontal: "right",
                    vertical: "top",
                    height: 1000,
                }}
                height={1000}
            >
                <div className="relative sm:absolute bg-white p-2 sm:p-10 mt-6 w-full sm:w-10/12 flex justify-center content-center flex-col tracking-widest z-20 shadow-xl">
                    <img src={data.logo.url} alt={data.logo.alt} width="80" className="mx-auto" />
                    <div className="text-skin-tone-3 uppercase text-2xl sm:text-6xl font-bold text-center font-primaryBold my-6">
                        <RichText render={data.services_title} />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center py-10">
                        {data.body.map((service) => (
                            <AnimateIn
                                triggerOnce
                                className="w-full sm:w-3/12 sm:mx-10 pb-10 sm:pb-0 flex flex-col justify-between"
                            >
                                <div>
                                    <img
                                        src={service.primary.service_image.url}
                                        alt={service.primary.service_image.alt}
                                        width="w-full"
                                        className="shadow-md"
                                    />
                                    <div className="text-skin-tone-3 uppercase text-xl font-bold text-center font-primaryBold my-7">
                                        <RichText render={service.primary.title} />
                                    </div>
                                    <div className="text-gray-600 text-lg text-left font-bold font-primaryRegular mb-2">
                                        <RichText render={service.primary.subtitle} />
                                    </div>
                                </div>
                                <Link href={`/${service.primary.page_link}`}>
                                    <a className="font-primaryRegular underline">
                                        <RichText render={service.primary.button_label} />
                                    </a>
                                </Link>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </Section>
        </Container>
    );
};

export async function getStaticProps() {
    const landing = await Client().query(Prismic.Predicates.at("document.type", "min"));

    const { data } = landing.results[0];
    return {
        props: {
            data,
        },
    };
}

export default Home;
