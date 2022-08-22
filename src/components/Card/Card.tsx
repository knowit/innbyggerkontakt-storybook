import React, { HTMLAttributes } from 'react';
import Delete from '@mui/icons-material/DeleteOutline';
import { Tag } from '../Tag/Tag';
import './Card.scss';

interface ImageProps {
  src: string;
  text: string;
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  image?: ImageProps;
  sendDate?: Date;
  executionDate?: Date;
  lastChanged?: Date;
  size: 'small' | 'large';
  tags?: string[];
  active?: boolean;
  iconButtonOnClick?: () => void;
}

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
  active = false,
  image,
  tags,
  children,
  iconButtonOnClick,
  ...rest
}: CardProps) => {
  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const renderCaption = () => {
    //if (size === 'small') return null;
    if (sendDate) {
      return <p className="cardCaption">{`Sendt den ${formatDate(sendDate)}`}</p>;
    } else if (executionDate) {
      return <p className="cardCaption">{`Sendes den ${formatDate(executionDate)}`}</p>;
    } else if (lastChanged) {
      return <p className="cardCaption">{`Sist endret ${formatDate(lastChanged)}`}</p>;
    }
  };

  return (
    <div className={`mainCardContainer mainCardContainer--${size}`} {...rest}>
      <div className={`cardContainer cardContainer--${size} ${active ? 'cardContainer--active' : ''}`}>
        {image ? (
          <img className={`cardImage cardImage--${size}`} src={image.src} alt={image.text} />
        ) : (
          <svg className={`cardImagePlaceholder cardImagePlaceholder--${size}`}>
            <rect />
          </svg>
        )}
        <div className={`cardWrapper cardWrapper--${size}`}>
          <span title={title} className={`cardTitle cardTitle--${size}`}>
            {title}
          </span>
          {renderCaption()}
          <div className="tagWrapper">{tags && tags.length > 0 && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
        </div>
      </div>
      {size === 'small' ? (
        <div className="cardChildrenWrapper" onClick={() => iconButtonOnClick && iconButtonOnClick()}>
          {children ? children : <Delete />}
        </div>
      ) : null}
    </div>
  );
};

Card.displayName = 'Card';
