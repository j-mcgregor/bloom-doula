import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
    const [mode, setMode] = useState("auto");
    return (
        <footer id="footer" className="relative z-50 dark:bg-gray-900">
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-16">
                <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                    <div className="lg:flex">
                        <div className="w-full flex justify-between">
                            <div className="w-full lg:w-1/2 px-6">
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
                                </ul>
                            </div>
                            <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
                                © 2021 Bloom Doula. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
