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
    height?: number;
    heightOnSmall?: number;
    equalWidth?: boolean;
    backgroundPosition?: string;
}

interface EdgeProps {
    horizontal: "left" | "right";
    vertical: "top" | "bottom";
    backgroundColor: string;
    height?: number;
    hideOnSmall?: boolean;
}

interface HalfProps {
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundPosition?: string;
    edge?: EdgeProps;
    height?: number;
    heightOnSmall?: number;
}

const Half = styled.div<HalfProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: ${({ backgroundPosition = "center center" }) => backgroundPosition};
    background-repeat: no-repeat;
    position: relative;
    height: ${({ height }) => `${height}px`};
    width: 100%;
    ${({ heightOnSmall }) =>
        heightOnSmall &&
        css`
            @media (max-width: 640px) {
                height: ${heightOnSmall}px;
            }
        `};

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
                ${({ edge }) =>
                    edge.hideOnSmall &&
                    css`
                        @media (max-width: 640px) {
                            display: none;
                        }
                    `};

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
                              border-top: ${`${edge.height}px solid ${edge.backgroundColor}`};
                          `
                        : css`
                              border-bottom: ${`${edge.height}px solid ${edge.backgroundColor}`};
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
    height,
    heightOnSmall,
    equalWidth,
    backgroundPosition,
}) => {
    return (
        <div className="w-full h-full sm:h-auto flex flex-col sm:flex-row relative items-center justify-center ">
            <Half
                backgroundImage={leftBackgroundImage}
                backgroundColor={leftBackgroundColor}
                backgroundPosition={backgroundPosition}
                className={classNames(
                    "sm:h-screen p-10",
                    equalWidth ? "w-full sm:w-1/2" : reverse ? "flex-grow" : "w-full sm:w-3/12",
                    {
                        "hidden sm:block": hideLeftOnSmall,
                    },
                    leftHeight ? leftHeight : "h-auto",
                    leftWidth ? leftWidth : "w-full sm:w-auto"
                )}
                {...(edge && edge.horizontal === "right" && { edge })}
                height={height}
                heightOnSmall={heightOnSmall}
            >
                {leftElement}
            </Half>
            <Half
                backgroundImage={rightBackgroundImage}
                backgroundColor={rightBackgroundColor}
                backgroundPosition={backgroundPosition}
                className={classNames(
                    "sm:h-screen p-10",
                    equalWidth ? "w-1/2" : reverse ? "w-full sm:w-9/12" : "flex-grow",
                    {
                        "hidden sm:block": hideRightOnSmall,
                    },
                    rightHeight ? rightHeight : "h-auto",
                    rightWidth ? rightWidth : "w-full sm:w-auto"
                )}
                {...(edge && edge.horizontal === "left" && { edge })}
                height={height}
                heightOnSmall={heightOnSmall}
            >
                {rightElement}
            </Half>
            {children}
        </div>
    );
};
