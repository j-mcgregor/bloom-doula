import { Container, Section } from "@components";
import { MainData } from "@interfaces/prismic-data";
import Prismic from "@prismicio/client";
import Head from "next/head";
import { Client } from "prismic-configuration";
import React from "react";
import { common } from "@definitions/styled-components";
import { RichText } from "prismic-reactjs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const socialMap = (url: string) => {
    if (url.includes("facebook")) {
        return <FaFacebook size="20px" />;
    } else if (url.includes("twitter")) {
        return <FaTwitter size="20px" />;
    } else {
        return <FaInstagram size="20px" />;
    }
};

const BirthDoula: React.FC<{ data: MainData }> = ({ data }) => {
    const content = (
        <div>
            <img
                src={data.logo.url}
                alt={data.logo.alt}
                width="80"
                className="w-24 mx-auto sm:float-right mb-10"
            />
            <div className="text-skin-tone-3 uppercase text-3xl sm:text-5xl font-bold my-7 clear-both font-primaryBold">
                <RichText render={data.contact_title} />
            </div>
            {data.contact_info.map((contact) => (
                <div className="my-3">
                    <div className="text-skin-tone-3 text-xl font-bold my-1 font-primaryBold">
                        <RichText render={contact.contact_label} />
                    </div>
                    <div className="text-gray-600 text-md font-bold my-1 font-primaryRegular">
                        <a href={contact.contact_link.url} target="_blank" rel="noopener noreferrer">
                            <RichText render={contact.contact_value} />
                        </a>
                    </div>
                </div>
            ))}
            <div className="flex justify-center mt-20 sm:mt-20 sm:justify-end">
                {data.social_media.map((social) => (
                    <a
                        href={social.platform_name.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-5 text-skin-tone-3 hover:text-pink-400"
                    >
                        {socialMap(social.platform_name.url)}
                    </a>
                ))}
            </div>
        </div>
    );
    return (
        <Container logo={data.logo}>
            <Head>
                <title>Contact | Bloom Births</title>
            </Head>

            <Section
                reverse
                leftBackgroundImage={data.contact_image.url}
                hideRightOnSmall
                backgroundPosition="left 30%"
                leftHeight="h-96"
                leftWidth="w-full sm:w-1/2"
                rightBackgroundColor={common.colors["skin-tone-1"]}
                rightElement={
                    <div className="w-full h-full p-2 sm:p-10 text-right hidden sm:flex flex-col sm:content-end justify-between tracking-widest">
                        {content}
                    </div>
                }
                edge={{
                    backgroundColor: common.colors["skin-tone-1"],
                    horizontal: "left",
                    vertical: "bottom",
                    height: 800,
                }}
                height={800}
                heightOnSmall={200}
                equalWidth
            />
            <div className="w-full h-full p-2 py-14 sm:hidden flex flex-col items-center justify-between tracking-widest bg-skin-tone-1 text-center">
                {content}
            </div>
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
