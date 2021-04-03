import classNames from "classnames";
import React from "react";
import styled from "styled-components";

interface SectionProps {
    reverse?: boolean;
    leftBackgroundImage?: string;
    leftBackgroundColor?: string;
    leftHeight?: string;
    leftWidth?: string;
    hideLeftOnSmall?: boolean;
    rightBackgroundImage?: string;
    rightBackgroundColor?: string;
    hideRightOnSmall?: boolean;
    rightHeight?: string;
    rightWidth?: string;
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
}

const Half = styled.div<{ backgroundColor?: string; backgroundImage?: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Section: React.FC<SectionProps> = ({
    reverse,
    leftBackgroundImage,
    leftBackgroundColor,
    leftElement,
    leftHeight,
    leftWidth,
    hideLeftOnSmall,
    rightBackgroundImage,
    rightBackgroundColor,
    rightElement,
    rightHeight,
    rightWidth,
    hideRightOnSmall,
    children,
}) => {
    return (
        <div className="w-full h-full sm:h-auto flex flex-col sm:flex-row relative items-center justify-center ">
            <Half
                backgroundImage={leftBackgroundImage}
                backgroundColor={leftBackgroundColor}
                className={classNames(
                    "sm:h-screen p-10",
                    reverse ? "flex-grow" : "w-full sm:w-5/12",
                    {
                        "hidden sm:block": hideLeftOnSmall,
                    },
                    leftHeight ? leftHeight : "h-auto",
                    leftWidth ? leftWidth : "w-auto"
                )}
            >
                {leftElement}
            </Half>
            <Half
                backgroundImage={rightBackgroundImage}
                backgroundColor={rightBackgroundColor}
                className={classNames(
                    "sm:h-screen p-10",
                    reverse ? "w-full sm:w-5/12" : "flex-grow",
                    {
                        "hidden sm:block": hideRightOnSmall,
                    },
                    rightHeight ? rightHeight : "h-auto",
                    rightWidth ? rightWidth : "w-auto"
                )}
            >
                {rightElement}
            </Half>
            {children}
        </div>
    );
};
