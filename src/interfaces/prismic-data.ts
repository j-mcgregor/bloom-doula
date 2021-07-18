import { RichTextBlock } from "prismic-reactjs";

export interface ImageIF {
    dimensions: {
        width: number;
        height: number;
    };
    alt: string;
    copyright: string;
    url: string;
}

export interface SocialIF {
    platform_name: {
        link_type: string;
        url: string;
    };
}

export interface LinkIF {
    link_type: string;
    url: string;
}

export interface ContactIF {
    contact_label: RichTextBlock[];
    contact_link: LinkIF;
    contact_value: RichTextBlock[];
}

export interface BodyIF {
    slice_type: string;
    slice_label: null;
    items: any[];
    primary: {
        service_image: ImageIF;
        title: RichTextBlock[];
        subtitle: RichTextBlock[];
        description: RichTextBlock[];
        button_label: RichTextBlock[];
        page_link: RichTextBlock[];
        button_link: LinkIF;
        find_out_more: RichTextBlock[];
    };
}

export interface MainData {
    logo: ImageIF;
    primary_title: RichTextBlock[];
    primary_subtitle: RichTextBlock[];
    primary_image: ImageIF;
    services_title: RichTextBlock[];
    about_title: RichTextBlock[];
    about_description: RichTextBlock[];
    about_image: ImageIF;
    contact_title: RichTextBlock[];
    contact_info: ContactIF[];
    contact_image: ImageIF;
    social_media: SocialIF[];
    body: BodyIF[];
}
