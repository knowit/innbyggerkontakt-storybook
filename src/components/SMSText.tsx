import { useState } from 'react';
import { styled } from '@storybook/theming';
import { SegmentedMessage } from 'sms-segments-calculator';
import { color, typography } from '../common';
import { TextArea, TextAreaProps } from './TextArea';

const SMSTable = styled.table`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${color.grayBorder};
  margin-top: -3px;
  border-radius: 3px;
  td {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.px14}px;
    font-weight: ${typography.weight.regular};

    flex-basis: 50%;
  }

  tr {
    display: flex;
    align-items: end;
    gap: 1rem;

    padding: 2px 4px;
    isolation: isolate;
  }

  tr:nth-child(even) {
    background-color: ${color.lightLightOpaque};
  }
`;
type SMSProps = Omit<TextAreaProps, 'onInternalChange'>;

export const SMSText = ({ id, className, ariaLabel, children = null, ...props }: SMSProps) => {
  const [maxTextLength, setMaxTextLength] = useState<number>(160);
  const [textLength, setTextLength] = useState<number>(0);
  const [smsMessages, setSmsMessages] = useState<number>(1);

  const getMessageSize = (message: string): void => {
    const segmentSize = new SegmentedMessage(message);
    if (segmentSize.encodingName === 'GSM-7') {
      if (segmentSize.segmentsCount > 1) {
        setMaxTextLength(Math.floor(1072 / 7));
      } else {
        setMaxTextLength(1120 / 7);
      }
      setTextLength(segmentSize.messageSize / 7);
    } else if (segmentSize.encodingName === 'UCS-2') {
      if (segmentSize.segmentsCount > 1) {
        setMaxTextLength(1072 / 16);
      } else {
        setMaxTextLength(1120 / 16);
      }
      setTextLength(segmentSize.messageSize / 16);
    } else {
      setMaxTextLength(0);
      setTextLength(0);
    }
  };

  const getNumberOfSMS = (message: string) => {
    const segmentSize = new SegmentedMessage(message);
    setSmsMessages(segmentSize.segmentsCount);
  };

  return (
    <div className={className}>
      <TextArea
        maxLength={765}
        id={id}
        ariaLabel={ariaLabel}
        {...props}
        onInternalChange={(e) => {
          getMessageSize(e.target.value);
          getNumberOfSMS(e.target.value);
        }}
      >
        {children}
      </TextArea>
      <SMSTable>
        <tbody>
          <tr>
            <td>Totalt antall tegn</td>
            <td>{textLength}/765</td>
          </tr>
          <tr>
            <td>Antall tegn igjen i nåværende melding</td>
            <td>{maxTextLength * smsMessages - textLength}</td>
          </tr>
          <tr>
            <td>Antall meldinger</td>
            <td>{smsMessages}</td>
          </tr>
          <tr>
            <td>Pris mer SMS</td>
            <td>0.32kr</td>
          </tr>
          <tr>
            <td>Total pris mer mottaker</td>
            <td>{0.32 * smsMessages}kr</td>
          </tr>
        </tbody>
      </SMSTable>
    </div>
  );
};
