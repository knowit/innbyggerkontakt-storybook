import React from 'react';

import { styled } from '@storybook/theming';

import { color, typography } from '../common';

interface ImageProps {
  src: string;
  text: string;
}
interface CardProps {
  title: string;
  image?: ImageProps;
  sendDate?: Date;
  executionDate?: Date;
  lastChanged?: Date;
  size: 'small' | 'large';
  type?: 'event' | 'search';
  status: 'draft' | 'finished' | 'active' | 'published' | 'archived' | 'planned';
}
const StyledCard = styled.div<Pick<CardProps, 'size'>>`
  box-shadow: 0 3px 6px ${color.borderShadow};
  background-color: ${color.white};
  padding: 0.75rem;

  :hover {
    background-color: ${color.lightLightOpaque};
  }

  ${(props) =>
    props.size === 'small'
      ? `
        display: flex;
        align-items: center;
    `
      : `
        width: fit-content;
        display: inline-grid;
    `}
`;

const StyledImage = styled.img<Pick<CardProps, 'size'>>`
  object-fit: cover;
  ${(props) =>
    props.size === 'small'
      ? `
        min-width: 3.5rem;
        min-height: 3.5rem;
        max-width: 3.5rem;
        max-height: 3.5rem;
    `
      : `
        height: 7rem;
        width: 12.5rem;
    `}
`;

const EmptySVG = styled.svg<Pick<CardProps, 'size'>>`
  fill: ${color.grayIncomplete};
  rect {
    width: inherit;
    height: inherit;
  }
  ${(props) =>
    props.size === 'small'
      ? `
        width: 3.5rem;
        height: 3.5rem;
    `
      : `
        height: 7rem;
        width: 12.5rem;
    `}
`;
const Tag = styled.div`
  order: 1;
  background: ${color.lightLightOpaque};
  color: ${color.darkBrightBlue};
  border-radius: 21px;
  padding: 3px 12px;
`;

const CardWrapper = styled.div<Pick<CardProps, 'size'>>`
  display: grid;
  row-gap: 0.5rem;
  font-family: ${typography.type.primary};
  ${(props) =>
    props.size === 'small'
      ? `
        font-weight: ${typography.weight.regular};
        font-size: ${typography.size.px14}px;
        padding-left: 1rem;
    `
      : `
        font-weight: ${typography.weight.regular};
        font-size: ${typography.size.px18}px;
        margin-top: 0.625rem;
    `}
`;

const TagWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px11}px;
`;

const Caption = styled.p`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.px11}px;
  font-weight: ${typography.weight.regular};
  color: ${color.grayText};
  margin: 0;
`;

/**
 * General card component. The following precedence apply for the caption:
 * 1. sendDate
 * 2. executionDate
 * 3. lastChanged
 * @param sendDate Date when a bulletin of type search was executed.
 * @param executionDate Date when the bulletin is scheduled to be sent.
 * @param lastChanged Date when the bulletin was last changed.
 */
export const Card = ({
  sendDate,
  lastChanged,
  executionDate,
  size = 'small',
  title = 'Title',
  image,
  type,
  status,
}: CardProps) => {
  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  function renderCaption() {
    if (sendDate) {
      return <Caption>{`Sendt den ${formatDate(sendDate)}`}</Caption>;
    } else if (executionDate) {
      return <Caption>{`Sendes den ${formatDate(executionDate)}`}</Caption>;
    } else if (lastChanged) {
      return <Caption>{`Sist endret ${formatDate(lastChanged)}`}</Caption>;
    }
  }

  function renderStatus() {
    switch (status) {
      case 'draft':
        return <Tag>Utkast</Tag>;
      case 'finished':
        return <Tag>Ferdig</Tag>;
      case 'published':
        return <Tag>Publisert</Tag>;
      case 'archived':
        return <Tag>Arkivert</Tag>;
      case 'active':
        return <Tag>Aktiv</Tag>;
      case 'planned':
        return <Tag>Planlagt</Tag>;
      default:
        return <></>;
    }
  }

  function renderType() {
    switch (type) {
      case 'search':
        return <Tag>Enkel</Tag>;
      case 'event':
        return <Tag>Automatisk</Tag>;
      default:
        return <></>;
    }
  }

  return (
    <StyledCard size={size}>
      {image ? (
        <StyledImage src={image.src} size={size} alt={image.text} />
      ) : (
        <EmptySVG size={size}>
          <rect />
        </EmptySVG>
      )}
      <CardWrapper size={size}>
        <span>{title}</span>
        {renderCaption()}
        <TagWrapper>
          {renderType()}
          {renderStatus()}
        </TagWrapper>
      </CardWrapper>
    </StyledCard>
  );
};

Card.displayName = 'Card';
