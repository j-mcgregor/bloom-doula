/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImageIF } from "@interfaces/prismic-data";
import { useRouter } from "next/router";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const Navbar: React.FC<{ logo: ImageIF }> = ({ logo }) => {
    const { pathname } = useRouter();

    const navigation = [
        { name: "Home", href: "/", current: pathname === "/" },
        { name: "About", href: "/about", current: pathname === "/about" },
        { name: "Birth Doula", href: "/birth-doula", current: pathname === "/birth-doula" },
        { name: "Post-natal Doula", href: "/post-natal", current: pathname === "/post-natal" },
        { name: "Contact", href: "/contact", current: pathname === "/contact" },
    ];
    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 font-primaryBold tracking-wide">
                        <div className="relative flex items-center justify-between h-20">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FaTimes className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <Link href="/">
                                    <a>
                                        <div className="flex-shrink-0 flex items-center">
                                            <img
                                                className="block lg:hidden h-8 w-auto"
                                                src={logo.url}
                                                alt={logo.alt}
                                            />
                                            <img
                                                className="hidden lg:block h-8 w-auto"
                                                src={logo.url}
                                                alt={logo.alt}
                                            />
                                            <div className="hidden lg:block w-auto font-primaryBold uppercase ml-3 tracking-widest">
                                                Bloom
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link key={item.name} href={item.href}>
                                                <a
                                                    className={classNames(
                                                        item.current
                                                            ? "font-semibold"
                                                            : "text-gray-800 hover:text-gray-500",
                                                        "px-3 py-2 rounded-md text-sm font-medium"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <a
                                        className={classNames(
                                            item.current
                                                ? "font-semibold"
                                                : "text-gray-400 hover:text-gray-500",
                                            "block px-3 py-2 rounded-md text-base font-medium"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
