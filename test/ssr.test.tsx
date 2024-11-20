// @vitest-environment node

import { describe, expect, it } from 'vitest';
import Modal from '../src';
import { renderToString } from 'react-dom/server';

describe('<Modal />', () => {
  it('renders to a string outside a DOM environment', async () => {
    const rendered = renderToString(
      <div data-testid="container">
        <Modal visible>
          <div className="modal-body">Hello world!</div>
        </Modal>
      </div>,
    );

    expect(rendered).toMatch(/Hello world!/);
  });
});
