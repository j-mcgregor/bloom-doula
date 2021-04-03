import { Container } from "@components";
import { Section } from "@components/section/Section";
import { common } from "@definitions/styled-components";
import { Client } from "prismic-configuration";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Prismic from "@prismicio/client";
import { MainData } from "@interfaces/prismic-data";
import { RichText } from "prismic-reactjs";

const socialMap = (url: string) => {
    if (url.includes("facebook")) {
        return <FaFacebook size="40px" />;
    } else if (url.includes("twitter")) {
        return <FaTwitter size="40px" />;
    } else {
        return <FaInstagram size="40px" />;
    }
};

const Home: React.FC<{ data: MainData }> = ({ data }) => {
    return (
        <Container>
            <Section
                leftBackgroundImage={data.primary_image.url}
                leftHeight="h-screen"
                rightBackgroundColor={common.colors["skin-tone-2"]}
                hideRightOnSmall
            >
                <div className="absolute bg-white p-10 w-10/12 sm:w-8/12 flex justify-center items-center flex-col text-center tracking-widest">
                    <img src={data.logo.url} alt={data.logo.alt} width="150" className="mx-auto" />
                    <div className="text-gray-800 uppercase text-7xl font-bold font-primaryBold tracking-widest my-10">
                        <RichText render={data.primary_title} />
                    </div>
                    <div className="text-gray-400 uppercase text-xl font-bold font-primaryRegular">
                        <RichText render={data.primary_subtitle} />
                    </div>
                </div>
            </Section>
            <Section
                reverse
                leftBackgroundColor={common.colors["skin-tone-3"]}
                rightBackgroundImage={data.about_image.url}
                rightHeight="h-screen"
                leftElement={
                    <div className="relative sm:absolute p-5 sm:p-10 w-full sm:w-3/6 flex flex-col items-center sm:items-start tracking-widest">
                        <img src={data.logo.url} alt={data.logo.alt} width="110" />
                        <div className="text-gray-800 uppercase text-4xl font-bold font-primaryBold my-6">
                            <RichText render={data.about_title} />
                        </div>
                        <div className="text-gray-100 text-lg font-primaryRegular text-justify">
                            <RichText render={data.about_description} />
                        </div>
                    </div>
                }
            />
            <Section
                leftBackgroundColor={common.colors["skin-tone-1"]}
                rightBackgroundColor={common.colors["skin-tone-3"]}
                hideLeftOnSmall
                rightHeight="h-10"
                rightWidth="w-full"
            >
                <div className="relative sm:absolute bg-white p-10 mt-6 w-full sm:w-10/12 flex justify-center content-center flex-col tracking-widest">
                    <img src={data.logo.url} alt={data.logo.alt} width="80" className="mx-auto" />
                    <div className="text-gray-800 uppercase text-6xl font-bold text-center font-primaryBold my-6">
                        <RichText render={data.services_title} />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center py-10">
                        {data.body.map((service) => (
                            <div className="w-full sm:w-3/12 sm:mx-10 pb-10 sm:pb-0">
                                <img
                                    src={service.primary.service_image.url}
                                    alt={service.primary.service_image.alt}
                                    width="w-full"
                                />
                                <div className="text-gray-800 uppercase text-xl font-bold text-center font-primaryBold my-7">
                                    <RichText render={service.primary.title} />
                                </div>
                                <div className="text-gray-400 text-lg text-justify font-primaryRegular mb-2">
                                    <RichText render={service.primary.subtitle} />
                                </div>
                                <a
                                    href={service.primary.button_link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-primaryRegular"
                                >
                                    <RichText render={service.primary.button_label} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <Section
                reverse
                leftBackgroundColor={common.colors["skin-tone-3"]}
                rightBackgroundColor={common.colors["skin-tone-1"]}
                hideLeftOnSmall
            >
                <div className="relative sm:absolute bg-white p-10 mt-6 w-full sm:w-10/12 h-5/6 flex justify-start content-center flex-col tracking-widest">
                    <img src={data.logo.url} alt={data.logo.alt} width="80" className="mx-auto" />
                    <div className="text-gray-800 uppercase text-6xl font-bold text-center font-primaryBold my-7">
                        <RichText render={data.body[0].primary.title} />
                    </div>
                    <div className="text-gray-400 text-lg text-justify font-primaryRegular">
                        <RichText render={data.body[0].primary.description} />
                    </div>
                    <div className="text-gray-600 text-lg text-justify font-primaryRegular">
                        <RichText render={data.body[0].primary.find_out_more} />
                    </div>
                </div>
            </Section>
            <Section
                leftBackgroundColor={common.colors["skin-tone-2"]}
                rightBackgroundColor={common.colors["skin-tone-3"]}
                hideLeftOnSmall
                rightWidth="w-full"
            >
                <div className="relative sm:absolute bg-white p-10 mt-6 w-full sm:w-10/12 h-5/6 flex justify-start content-center flex-col tracking-widest">
                    <img src={data.logo.url} alt={data.logo.alt} width="80" className="mx-auto" />
                    <div className="text-gray-800 uppercase text-6xl font-bold text-center font-primaryBold my-7">
                        <RichText render={data.body[1].primary.title} />
                    </div>
                    <div className="text-gray-400 text-lg text-justify font-primaryRegular">
                        <RichText render={data.body[1].primary.description} />
                    </div>
                    <div className="text-gray-600 text-lg text-justify font-primaryRegular">
                        <RichText render={data.body[1].primary.find_out_more} />
                    </div>
                </div>
            </Section>
            <Section
                reverse
                leftBackgroundImage={data.contact_image.url}
                leftHeight="h-96"
                leftWidth="w-full"
                rightBackgroundColor={common.colors["skin-tone-1"]}
                rightElement={
                    <div className="w-full h-full p-10 text-right flex flex-col sm:content-end justify-between tracking-widest">
                        <div>
                            <img
                                src={data.logo.url}
                                alt={data.logo.alt}
                                width="80"
                                className="float-right mb-10"
                            />
                            <div className="text-gray-800 uppercase text-5xl font-bold my-7 clear-both font-primaryBold">
                                <RichText render={data.contact_title} />
                            </div>
                            {data.contact_info.map((contact) => (
                                <div className="my-3">
                                    <div className="text-gray-600 text-xl font-bold my-1 font-primaryBold">
                                        <RichText render={contact.contact_label} />
                                    </div>
                                    <div className="text-gray-400 text-xl font-bold my-1 font-primaryRegular">
                                        <a
                                            href={contact.contact_link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {contact.contact_link.url}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-10 sm:mt-3 sm:justify-end">
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
                }
            />
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
