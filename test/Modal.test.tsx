import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen, within } from '@testing-library/dom';
import Modal from '../src';
import { useRef } from 'react';

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

  it('renders to a specified target', async () => {
    const TargetTester = () => {
      const targetRef = useRef<HTMLDivElement>(null);

      return (
        <>
          <Modal visible target={targetRef.current}>
            <div className="modal-body">Hello world!</div>
          </Modal>
          <div data-testid="container" ref={targetRef}></div>
        </>
      );
    };

    const { rerender } = render(<TargetTester />);
    // Do a second render to give targetRef a chance to populate
    rerender(<TargetTester />);

    expect(
      await within(await screen.findByTestId('container')).findByText('Hello world!'),
    ).toBeInTheDocument();
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
