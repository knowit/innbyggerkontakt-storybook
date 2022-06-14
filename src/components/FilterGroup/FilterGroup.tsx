import { styled } from '@storybook/theming';

import { FilterToggle } from '../FilterToggle/FilterToggle';

interface FilterGroupProps {
  options: string[];
  toggled: string[];
  setToggled: React.Dispatch<React.SetStateAction<string[]>>;
  exclusivity?: Map<string, string[]>;
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
 * @param exclusivity is a map<K,V> where K is an option and V is a list of all options that should be disabled when K is toggled
 */
export const FilterGroup: React.FC<FilterGroupProps> = ({ options, toggled, setToggled, exclusivity }) => {
  function isDisabled(option: string) {
    for (const item of toggled) {
      if (exclusivity?.get(item)?.includes(option)) {
        return true;
      }
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
    return options.map((option) => {
      if (toggled.includes(option)) {
        return <FilterToggle label={option} onClick={() => handleToggle(option)} toggled />;
      } else if (isDisabled(option)) {
        return <FilterToggle label={option} onClick={() => void 0} disabled={true} />;
      }
      return <FilterToggle label={option} onClick={() => handleToggle(option)} />;
    });
  }

  return <StyledDiv>{renderFilters()}</StyledDiv>;
};
