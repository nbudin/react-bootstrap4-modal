import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen, within } from '@testing-library/dom';
import Modal from '../src';

describe('<Modal />', () => {
  it('renders to document body', async () => {
    render(
      <div data-testid="container">
        <Modal visible>
          <div className="modal-body">Hello world!</div>
        </Modal>
      </div>,
    );

    expect(await screen.findByText('Hello world!')).toBeInTheDocument();
    expect((await screen.findByTestId('container')).childNodes.length).toEqual(0);
  });

  it('renders inline', async () => {
    render(
      <div data-testid="container">
        <Modal visible inline>
          <div className="modal-body">Hello world!</div>
        </Modal>
      </div>,
    );

    expect(
      await within(await screen.findByTestId('container')).findByText('Hello world!'),
    ).toBeInTheDocument();
  });
});
