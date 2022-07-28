import { styled } from '@storybook/theming';

import { FilterToggle } from '../FilterToggle/FilterToggle';

interface FilterGroupProps {
  options: string[];
  toggled: string[];
  setToggled: React.Dispatch<React.SetStateAction<string[]>>;
  exclusivity?: string[][];
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
`;

/**
 * Renders FilterToggles based on given options and exclusivity.
 * @param options list of filter options
 * @param toggled state containing toggled items - must match labels in options
 * @param setToggled setter for toggled state
 * @param exclusivity is a list of string[] where the the sublists contain mutually exclusive options
 */
export const FilterGroup: React.FC<FilterGroupProps> = ({
  type = 'button',
  options,
  toggled,
  setToggled,
  exclusivity,
}) => {
  function isDisabled(option: string) {
    if (exclusivity) {
      return exclusivity
        .filter((sublist) => sublist.includes(option))
        .flat()
        .filter((item) => item !== option)
        .some((item) => toggled.includes(item));
    }
    return false;
  }

  function handleToggle(option: string) {
    if (toggled.includes(option)) {
      setToggled(toggled.filter((item) => item !== option));
    } else {
      setToggled([...toggled, option]);
    }
  }

  /* renders filters either toggled, untoggled or disabled */
  function renderFilters() {
    return options.map((option, index) => {
      if (toggled.includes(option)) {
        return <FilterToggle type={type} label={option} onClick={() => handleToggle(option)} toggled key={index} />;
      } else if (isDisabled(option)) {
        return <FilterToggle type={type} label={option} onClick={() => void 0} disabled={true} key={index} />;
      }
      return <FilterToggle type={type} label={option} onClick={() => handleToggle(option)} key={index} />;
    });
  }

  return <StyledDiv>{renderFilters()}</StyledDiv>;
};
