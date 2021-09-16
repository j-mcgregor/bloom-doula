import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="footer" className="relative z-50 dark:bg-gray-900 font-primaryBold tracking-wide">
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-16">
                <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                    <div className="lg:flex">
                        <div className="w-full flex flex-col-reverse sm:flex-row justify-between">
                            <div className="w-full lg:w-1/2 px-6 py-4 sm:py-0">
                                <ul>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                                        >
                                            Privacy policy
                                        </a>
                                    </li>
                                    <li className="mt-6">
                                        <Link href="javascript:void(0)">
                                            <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                                                Terms of service
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mt-6">
                                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                                            © 2021 Bloom Doula. All Rights Reserved.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row-reverse items-center sm:justify-between  py-4 sm:py-0">
                                <a
                                    href="https://www.thedouladirectory.com/kings-langley/doulas/laura-mcgregor?from=badge"
                                    title="Find me on The Doula Directory"
                                    target="_blank"
                                >
                                    <img
                                        src="https://www.thedouladirectory.com/images/Doula-Directory-Listing-Logo-(2).png"
                                        className="h-32 sm:h-48"
                                    />
                                </a>
                                <a
                                    href="https://www.birthblissdoulacourses.co.uk/"
                                    title="Birth Bliss Courses"
                                    target="_blank"
                                >
                                    <img src="/BirthBlissAcademy.png" className="h-32 sm:h-48" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
