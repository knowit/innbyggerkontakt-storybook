import React from 'react';
import { styled } from '@storybook/theming';
import { color, typography } from '../..';

interface ImageProps {
    src: string,
    text: string
}
interface CardProps {
    title: string;
    image?: ImageProps;
    date?: string;
    lastChanged?: string;
    size: 'small' | 'large';
    bulletinType: 'event' | 'search';
    bulletinStatus: 'draft' | 'finished';
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;

}
const StyledCard = styled.div<Pick<CardProps, 'size'>>`
    box-shadow: 0 3px 6px ${color.borderShadow};
    background-color: ${color.white};
    padding: 0 1rem;
    ${(props) => props.size === 'small' ? `
        display: flex;
        align-items: center;
    ` : `
        display: inline-grid;
    `}
`

const StyledImage = styled.img<Pick<CardProps, 'size'>>`
    padding: 1rem 0rem;
    object-fit: cover;
    ${(props) => props.size === 'small' ? `
        min-width: 3.5rem;
        min-height: 3.5rem;
        max-width: 3.5rem;
        max-height: 3.5rem;
    ` : `
        height: 7rem;
        width: 14rem;
    `}
`

const EmptySVG = styled.svg<Pick<CardProps, 'size'>>`
    fill: ${color.grayIncomplete};
    padding: 1rem 0rem;
    rect {
        width: inherit;
        height: inherit;
    }
    ${(props) => props.size === 'small' ? `
        width: 3.5rem;
        height: 3.5rem;
    ` : `
        height: 7rem;
        width: 14rem;
    `}
`
const Tag = styled.div`
    order: 1;
    background: ${color.lightLightOpaque};
    color: ${color.darkBrightBlue};
    border-radius: 21px;
    padding: 3px 12px;
`

const CardWrapper = styled.div<Pick<CardProps, 'size'>>`
    display: grid;
    row-gap: 11px;
    font-family: ${typography.type.primary};
    ${(props) => props.size === 'small' ? `
        font-weight: ${typography.weight.regular};
        font-size: ${typography.size.px14}px;
        padding-left: 1rem;
    ` : `
        font-weight: ${typography.weight.regular};
        font-size: ${typography.size.px18}px;
        padding-bottom: 1rem;
        span:hover {
            font-weight: ${typography.weight.extrabold};
        }
    `}
`

const TagWrapper = styled.div`
    display: flex;
    column-gap: 5px;
    font-family: ${typography.type.primary};
    font-size: ${typography.size.px11}px;
    &:hover{
        font-weight: ${typography.weight.regular};
    }
`
export const Card = ({date, lastChanged, size = 'small', title="Title", image, bulletinType="event", bulletinStatus="draft"} : CardProps) => {
    return (
        <StyledCard size={size}>
            {image ? (
                    <StyledImage src={image.src} size={size} alt={image.text}/>
                ) : (
                    <EmptySVG size={size}><rect/></EmptySVG>
            )}
            <CardWrapper size={size}>
                <span>
                    {title}
                </span>
                <TagWrapper>
                    <Tag>{bulletinType === 'event' ? 'Automatisk': 'Enkel'}</Tag>
                    {bulletinStatus === 'draft' && <Tag>Kladd</Tag>}
                    {bulletinType === 'search' && bulletinStatus === 'finished' && (
                    <Tag>Sendt: {date}</Tag>
                    )}
                    {lastChanged && lastChanged !== '' && <Tag>Sist endret: {lastChanged}</Tag>}

                </TagWrapper>
            </CardWrapper>
        </StyledCard>
    )
}

Card.displayName = "Card";