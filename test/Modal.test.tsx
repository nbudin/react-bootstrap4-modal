import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Modal from '../src';

describe('<Modal />', () => {
  it('renders', async () => {
    render(
      <Modal visible>
        <div className="modal-body">Hello world!</div>
      </Modal>,
    );

    expect(await screen.findByText('Hello world!')).toBeInTheDocument();
  });
});
