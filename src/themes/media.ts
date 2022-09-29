// responsive
import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { themes } from 'themes';

export const sp = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: ${themes.breakpoints.sm - 1}px) {
    ${css(first, ...interpolations)}
  }
`;

export const tab = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${themes.breakpoints.sm}px) and (max-width: ${themes.breakpoints.lg}px) {
    ${css(first, ...interpolations)}
  }
`;

export const pcSmall = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${themes.breakpoints.lg}px) and (max-width: ${themes.breakpoints.xl}px) {
    ${css(first, ...interpolations)}
  }
`;

export const pc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${themes.breakpoints.lg + 1}px) {
    ${css(first, ...interpolations)}
  }
`;

export const pcLarge = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${themes.breakpoints.xl}px) {
    ${css(first, ...interpolations)}
  }
`;

export const spAndTab = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: ${themes.breakpoints.lg}px) {
    ${css(first, ...interpolations)}
  }
`;

export const spAndPc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: ${themes.breakpoints.xl}px) {
    ${css(first, ...interpolations)}
  }
`;

export const tabAndPc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${themes.breakpoints.sm}px) {
    ${css(first, ...interpolations)}
  }
`;
