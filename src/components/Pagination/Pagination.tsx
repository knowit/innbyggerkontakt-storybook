import React from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../..';
import { Next, Previous } from '../../images';
import { Button } from '../Button/Button';

export interface PaginationProps {
  activePage: number;
  totalPage: number;
  handlePageClickRight?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handlePageClickLeft?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabledLeft?: boolean;
  disabledRight?: boolean;
}

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  svg {
    display: inline-block;
    shape-rendering: inherit;
    transform: translate3d(0, 0, 0);
    vertical-align: middle;
    height: 0.75rem;
    path {
      fill: currentColor;
    }
  }
  button {
    background-color: ${color.lightLightOpaque};
    border-radius: 50%;
    border: none;
    width: 2.15rem;
    height: 2.15rem;
    padding: 0%;
    svg {
      color: ${color.brightBlue};
    }
    &:hover {
      background-color: ${color.lightBlue};
      svg {
        color: ${color.darkBrightBlue};
      }
    }
    &:focus {
      background-color: ${color.lightBlue};
    }
    &:active {
      background-color: ${color.lightBrightBlue};
      svg {
        color: ${color.white};
      }
    }
  }
`;

const StyledP = styled.p`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px18}px;
  font-weight: ${typography.weight.regular};
  color: ${color.darkBrightBlue};
  margin: 0 1.25rem 0 1.25rem;
`;

export const Pagination = ({
  activePage,
  totalPage,
  disabledLeft,
  disabledRight,
  handlePageClickRight,
  handlePageClickLeft,
}: PaginationProps) => {
  return (
    <StyledPagination>
      <Button
        aria-label="Forrige side"
        onClick={(e) => {
          handlePageClickLeft && handlePageClickLeft(e);
          e.currentTarget.blur();
        }}
        disabled={disabledLeft}
        id="forrgieSide"
      >
        <Previous aria-label="forrigeSideButton" />
      </Button>

      <StyledP>
        {activePage} av {totalPage}
      </StyledP>

      <Button
        aria-label="Neste side"
        onClick={(e) => {
          handlePageClickRight && handlePageClickRight(e);
          e.currentTarget.blur();
        }}
        disabled={disabledRight}
        id="nesteSide"
      >
        <Next aria-label="nesteSideButton" />
      </Button>
    </StyledPagination>
  );
};

Pagination.displayName = 'Pagination';
