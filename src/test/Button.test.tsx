import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import * as Button from '../stories/Button.stories';

const { Sizes, Color, Variant } = composeStories(Button); //Default er Default storyen til Radiobutton med alle props. Kan også ha flere stories dersom ønskelig ({Default, Primary} = composeStories(...))
expect.extend(toHaveNoViolations);

test('Button has no violations in Variant story', async () => {
  const { container } = render(<Variant />);
  const AxeResults = await axe(container);
  expect(AxeResults).toHaveNoViolations();
});

test('Button has no violations in Color story', async () => {
  const { container } = render(<Color />);
  const AxeResults = await axe(container);
  expect(AxeResults).toHaveNoViolations();
});

test('Button has no violations in Size story', async () => {
  const { container } = render(<Sizes />);
  const AxeResults = await axe(container);
  expect(AxeResults).toHaveNoViolations();
});
