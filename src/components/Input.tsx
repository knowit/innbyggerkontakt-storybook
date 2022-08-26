import React, {
  ComponentProps,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
  SVGProps,
} from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@storybook/theming';

import { color, typography } from '../common';

export interface InputProps {
  id: string;
  type?: string;
  value?: string;
  label: string;
  className?: string;
  helperText?: string;
  labelIcon?: ReactNode;
  icon?: SVGProps<SVGElement>;
  error?: boolean;
  hideLabel?: boolean;
  startFocused?: boolean;
  appearence?: 'green' | 'blue';
}

const InputEl = styled.input`
  margin: 1px;
  width: 100%;
  border-radius: 3px;
  box-sizing: border-box;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  position: relative;
  padding: 15px 16px;
  font-size: ${typography.size.px18}px;
  line-height: 20px;

  &:focus {
    margin: 0;
    border-width: 2px;
    outline: none;
  }
`;

const Label = styled.label<Pick<InputProps, 'hideLabel'>>`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.px18}px;
  padding-left: 2px;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  ${({ hideLabel }) => hideLabel && 'display: none;'}
`;

const HelperText = styled.span<Pick<InputProps, 'error'>>`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.px11}px;
  ${(props) =>
    props.error === true
      ? `
          color: ${color.error};
        `
      : `
          color: ${color.black};
        `}
`;

const LabelWrapper = styled.div<Pick<InputProps, 'hideLabel'>>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.25rem;

  ${(props) => props.hideLabel && 'display: none; '}
`;

const InputWrapper = styled.div<Pick<InputProps, 'appearence' | 'error'>>`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;
  > svg,
  span > svg {
    display: inline-block;
    shape-rendering: inherit;
    transform: translate3d(0, 0, 0);
    vertical-align: middle;
    transition: all 150ms ease-out;
    position: absolute;
    top: 50%;
    right: 15px;
    cursor: pointer;
    align-items: center;
    ${(props) =>
      props.appearence === 'green'
        ? `
            color: ${color.darkestGreen};
          `
        : `
            color: ${color.darkBrightBlue};
          `}
    height: 1em;
    width: 1em;
    margin-top: -0.525em;
    z-index: 3;
    background: transparent;
  }
  > input {
    ${(props) => `border: 1px solid ${props.appearence === 'green' ? color.darkestGreen : color.darkBrightBlue};`}
    ${(props) =>
      props.error === true &&
      `
        border: 2px solid ${color.error};
      `}
  }
`;

export const Input = forwardRef<HTMLInputElement, InputProps & ComponentProps<typeof InputEl>>(
  (
    {
      id,
      appearence = 'green',
      className = undefined,
      error = false,
      helperText,
      hideLabel = false,
      icon,
      label,
      labelIcon,
      startFocused = false,
      type = 'text',
      value,
      ...props
    }: InputProps,
    ref,
  ) => {
    // Outside refs take precedence
    const selfRef = useRef();
    const inputRef = (ref as MutableRefObject<HTMLInputElement>) || selfRef;
    const didFocusOnStart = useRef(false);

    const [pwd, setPwd] = useState(type);

    const togglePassword = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        pwd === 'password' ? setPwd('text') : setPwd('password');
      },
      [pwd],
    );

    useEffect(() => {
      if (inputRef.current && startFocused && !didFocusOnStart.current) {
        inputRef.current.focus();
        didFocusOnStart.current = true;
      }
    }, [inputRef, didFocusOnStart]);

    return (
      <div className={className}>
        <LabelWrapper hideLabel={hideLabel}>
          <Label htmlFor={id} aria-labelledby={id} hideLabel={hideLabel}>
            {labelIcon}
            {label}
          </Label>
          <HelperText error={error}>{helperText}</HelperText>
        </LabelWrapper>
        <InputWrapper appearence={appearence} error={error}>
          <>
            {type === 'password' ? (
              pwd === 'password' ? (
                <span onClick={togglePassword}>
                  <VisibilityOff />
                </span>
              ) : (
                <span onClick={togglePassword}>
                  <Visibility />
                </span>
              )
            ) : (
              icon
            )}
            <InputEl
              id={id}
              aria-label={id}
              title={id}
              // Pass the ref to the actual input element so it can be controlled
              // externally.
              ref={ref}
              value={value}
              type={type === 'password' ? pwd : type}
              aria-invalid={!!error}
              {...props}
            />
          </>
        </InputWrapper>
      </div>
    );
  },
);

Input.displayName = 'Input';
