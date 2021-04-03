import Prismic from "@prismicio/client";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = "https://bloomdoula.cdn.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = "";

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {};
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
    return {
        ...reqOption,
        ...accessTokenOption,
    };
};

export const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, accessToken));
