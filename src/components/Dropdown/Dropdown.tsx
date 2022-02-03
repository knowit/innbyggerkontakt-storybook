import React from 'react';
import Select, { Props, StylesConfig } from 'react-select';
import { color, typography } from '../../common';
import './Dropdown.scss';

interface OptionProps {
  value: string;
  label: string;
}
export interface SelectProps extends Omit<Props, 'isMulti'> {
  id?: string;
  defaultValue?: OptionProps[];
  options: OptionProps[];
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  /* a11y */
  ariaLabel: string;
  ariaError: string;
}

const StyledSelect: StylesConfig = {
  control: () => ({
    backgroundColor: `${color.white}`,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: '2px',
    border: `1px solid ${color.brightBlue}`,
    padding: '16px 24px',
    outline: '0 !important',
    minHeight: '38px',
    boxShadow: 'none',
    transition: 'all 100ms',
  }),
  valueContainer: (provided) => ({
    ...provided,
    fontFamily: `${typography.type.primary}`,
    fontSize: `${typography.size.px18}px`,
    fontWeight: `${typography.weight.regular}`,
    padding: 0,
  }),
  input: (provided) => ({
    ...provided,
    fontFamily: `${typography.type.primary}`,
    fontSize: `${typography.size.px18}px`,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: state.selectProps.menuIsOpen ? `${typography.weight.extrabold}` : `${typography.weight.regular}`,
  }),
  multiValue: (provided, state) => ({
    ...provided,
    fontSize: `${typography.size.px18}px`,
    fontWeight: state.selectProps.menuIsOpen ? `${typography.weight.extrabold}` : `${typography.weight.regular}`,
    backgroundColor: `${color.brightBlue}`,
    color: `${color.white} !important`,
    borderRadius: '2px',
    border: `1px solid ${color.brightBlue}`,
  }),
  menuList: (provided) => ({
    ...provided,
    border: `1px solid ${color.brightBlue}`,
    borderRadius: '2px',
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: `${typography.type.primary}`,
    fontSize: `${typography.size.px18}px`,
    fontWeight: `${typography.weight.regular}`,
    backgroundColor: state.isSelected
      ? `${color.brightBlue}`
      : state.isFocused
      ? `${color.lightLightOpaque}`
      : `${color.white}`,
    padding: '16px 24px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: `${color.black}`,
    transform: state?.selectProps?.menuIsOpen ? 'rotate(180deg)' : undefined,
  }),
};
export const Dropdown = ({
  id,
  options,
  defaultValue,
  closeMenuOnSelect = true,
  isClearable,
  isMulti = false,
  ariaLabel,
  ariaError,
  ...props
}: SelectProps) => {
  return (
    <Select
      id={id}
      styles={StyledSelect}
      options={options}
      defaultValue={defaultValue}
      isClearable={isClearable}
      closeMenuOnSelect={closeMenuOnSelect}
      aria-label={ariaLabel}
      aria-error={ariaError}
      isMulti={isMulti}
      {...props}
    ></Select>
  );
};

Dropdown.displayName = 'Dropdown';
