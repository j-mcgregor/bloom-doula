import React from "react";
import styled, { css } from "styled-components";

interface SectionProps {
    reverse?: boolean;
    backgroundColor?: string; // fallback color
    backgroundImage?: string; // opposite the skewedBackgroundColor
    skewedBackgroundColor?: string;
}

const _Skewed2 = styled.div<SectionProps>`
    position: relative;
    height: 100%;
    width: 40%;
    background: ${({ skewedBackgroundColor }) => skewedBackgroundColor};

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
    }

    &:before {
        z-index: 2;
        ${({ reverse }) =>
            reverse
                ? css<SectionProps>`
                      left: 100%;
                      border-right: 365px solid transparent;
                      border-bottom: 100vh solid ${({ skewedBackgroundColor }) => skewedBackgroundColor};
                  `
                : css<SectionProps>`
                      right: 100%;
                      border-left: 365px solid transparent;
                      border-bottom: 100vh solid ${({ skewedBackgroundColor }) => skewedBackgroundColor};
                  `};
    }
    /* white border */
    &:after {
        z-index: 1;
        ${({ reverse }) =>
            reverse
                ? css<SectionProps>`
                      left: 100%;
                      border-right: 365px solid transparent;
                      border-bottom: 100vh solid white;
                      transform: translateX(10px) scale(1.05);
                  `
                : css<SectionProps>`
                      right: 100%;
                      border-left: 365px solid transparent;
                      border-bottom: 100vh solid white;
                      transform: translateX(-10px) scale(1.05);
                  `};
    }
`;

const HalfB: React.FC<SectionProps> = ({ reverse = false, skewedBackgroundColor }) => (
    <_Skewed2 skewedBackgroundColor={skewedBackgroundColor} reverse={reverse} />
);

const HalfA = styled.div<{ backgroundImage?: string; reverse?: boolean }>`
    width: 60%;
    position: relative;
    background-image: url(${({ backgroundImage = "" }) => backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const SplitSection: React.FC<SectionProps> = ({
    reverse = false,
    backgroundColor,
    backgroundImage,
    skewedBackgroundColor,
    children,
}) => {
    const body = reverse ? (
        <>
            {/* left */}
            <HalfB reverse skewedBackgroundColor={skewedBackgroundColor} />
            {/* right */}
            <HalfA className="h-full" backgroundImage={backgroundImage} reverse>
                {/* <h1>Hi</h1> */}
            </HalfA>
        </>
    ) : (
        <>
            {/* left */}
            <HalfA className="h-full" backgroundImage={backgroundImage}>
                {/* <h1>Hi</h1> */}
            </HalfA>
            {/* right */}
            <HalfB skewedBackgroundColor={skewedBackgroundColor} />
        </>
    );

    return (
        <div className={`h-screen w-full relative flex overflow-hidden ${backgroundColor}`}>
            {body}
            {children}
        </div>
    );
};
