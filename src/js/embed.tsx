import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { DNALogo, DNALogoProps } from "../components/logo/DNALogo";
import { RNALogo, RNALogoProps } from "../components/logo/RNALogo";
import { ProteinLogo, ProteinLogoProps } from "../components/logo/ProteinLogo";
import { Logo, LogoProps } from "../components/logo/Logo";
import { RawLogo, RawLogoProps } from "../components/logo/RawLogo";

/**
 * Imperatively embeds a DNA logo in a div; intended for use outside of a React application.
 *
 * @param div the div element in which to embed the DNA logo.
 * @param props object containing the logo's properties.
 */
export const embedDNALogo = (div: HTMLDivElement, props: DNALogoProps) => {
  div.innerHTML = renderToStaticMarkup(<DNALogo {...props} />);
};

/**
 * Imperatively embeds a RNA logo in a div; intended for use outside of a React application.
 *
 * @param div the div element in which to embed the RNA logo.
 * @param props object containing the logo's properties.
 */
export const embedRNALogo = (div: HTMLDivElement, props: RNALogoProps) => {
  div.innerHTML = renderToStaticMarkup(<RNALogo {...props} />);
};

/**
 * Imperatively embeds a protein logo in a div; intended for use outside of a React application.
 *
 * @param div the div element in which to embed the protein logo.
 * @param props object containing the logo's properties.
 */
export const embedProteinLogo = (
  div: HTMLDivElement,
  props: ProteinLogoProps
) => {
  div.innerHTML = renderToStaticMarkup(<ProteinLogo {...props} />);
};

/**
 * Imperatively embeds a logo in a div; intended for use outside of a React application.
 *
 * @param div the div element in which to embed the logo.
 * @param props object containing the logo's properties.
 */
export const embedLogo = (div: HTMLDivElement, props: LogoProps) => {
  div.innerHTML = renderToStaticMarkup(<Logo {...props} />);
};

/**
 * Imperatively embeds a raw logo in a div; intended for use outside of a React application.
 *
 * @param div the div element in which to embed the raw logo.
 * @param props object containing the logo's properties.
 */
export const embedRawLogo = (container: HTMLElement, props: RawLogoProps) => {
  container.innerHTML = renderToStaticMarkup(<RawLogo {...props} />);
};
