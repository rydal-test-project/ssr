import { math } from 'polished';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

export const TargetWrapper = styled.div(() => ({
  display: 'inline',
}));

const arrowSize = '8px';
export const Arrow = styled.span(({ theme }) => css`

  &, &:before {
    position: absolute;
    width: ${arrowSize};
    height: ${arrowSize};
    z-index: -1;
  }

  &:before {
    content: '';
    transform: rotate(45deg);
    background: ${theme.components.popover.arrowColor};
  }
`);

export const ContentWrapper = styled(animated.div)<{ show: boolean }>(({ show, theme }) => css`
  max-width: 70%;
  background-color: ${theme.components.popover.backgroundColor};
  padding: ${theme.components.popover.padding};
  border-radius: ${theme.components.popover.borderRadius};
  box-shadow: ${theme.components.popover.boxShadow};

    &[data-popper-placement^='top'] > ${Arrow} {
      bottom: ${math(`-${theme.components.popover.arrowSize} / 2`)};
    }

    &[data-popper-placement^='bottom']  > ${Arrow} {
      top: ${math(`-${theme.components.popover.arrowSize} / 2`)};
    }

    &[data-popper-placement^='left'] > ${Arrow} {
      right: ${math(`-${theme.components.popover.arrowSize} / 2`)};
    }

    &[data-popper-placement^='right'] > ${Arrow} {
      left: ${math(`-${theme.components.popover.arrowSize} / 2`)};
    }
`);
