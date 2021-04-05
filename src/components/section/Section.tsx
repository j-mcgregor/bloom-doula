import classNames from "classnames";
import React from "react";
import styled, { css } from "styled-components";

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
    edge?: EdgeProps;
}

interface EdgeProps {
    horizontal: "left" | "right";
    vertical: "top" | "bottom";
    backgroundColor: string;
}

interface HalfProps {
    backgroundColor?: string;
    backgroundImage?: string;
    edge?: EdgeProps;
}

const Half = styled.div<HalfProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    ${({ edge }) =>
        edge &&
        Object.keys(edge).length &&
        css<HalfProps>`
            &:after {
                z-index: 10;
                content: "";
                position: absolute;
                top: 0;
                width: 0;
                height: 0;

                /* dynamic */

                ${({ edge }) =>
                    edge.horizontal === "left"
                        ? css`
                              right: 100%;
                              border-left: 365px solid transparent;
                          `
                        : css`
                              left: 100%;
                              border-right: 365px solid transparent;
                          `}

                ${({ edge }) =>
                    edge.vertical === "top"
                        ? css`
                              border-top: 100vh solid ${edge.backgroundColor};
                          `
                        : css`
                              border-bottom: 100vh solid ${edge.backgroundColor};
                          `}
            }
        `};
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
    edge,
}) => {
    return (
        <div className="w-full h-full sm:h-auto flex flex-col sm:flex-row relative items-center justify-center ">
            <Half
                backgroundImage={leftBackgroundImage}
                backgroundColor={leftBackgroundColor}
                className={classNames(
                    "sm:h-screen p-10",
                    reverse ? "flex-grow" : "w-full sm:w-6/12",
                    {
                        "hidden sm:block": hideLeftOnSmall,
                    },
                    leftHeight ? leftHeight : "h-auto",
                    leftWidth ? leftWidth : "w-auto"
                )}
                {...(edge && edge.horizontal === "right" && { edge })}
            >
                {leftElement}
            </Half>
            <Half
                backgroundImage={rightBackgroundImage}
                backgroundColor={rightBackgroundColor}
                className={classNames(
                    "sm:h-screen p-10",
                    reverse ? "w-full sm:w-6/12" : "flex-grow",
                    {
                        "hidden sm:block": hideRightOnSmall,
                    },
                    rightHeight ? rightHeight : "h-auto",
                    rightWidth ? rightWidth : "w-auto"
                )}
                {...(edge && edge.horizontal === "left" && { edge })}
            >
                {rightElement}
            </Half>
            {children}
        </div>
    );
};
