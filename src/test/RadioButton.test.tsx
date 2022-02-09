import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as RadioButton from '../stories/RadioButton.stories';

const { Default } = composeStories(RadioButton); //Default er Default storyen til Radiobutton med alle props. Kan også ha flere stories dersom ønskelig ({Default, Primary} = composeStories(...))
expect.extend(toHaveNoViolations);

test('Radio button has no violations', async () => {
    const { container } = render(<Default />);
    const AxeResults = await axe(container);
    expect(AxeResults).toHaveNoViolations();
});