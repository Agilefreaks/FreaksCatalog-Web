import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
  it('should render the modal title', () => {
    const title = 'Skills';
    const onClose = () => false;
    const isOpen = false;

    render(
      <Modal
        title={ title }
        onClose={ onClose }
        isOpen={ isOpen }
      >
        <p>Modal content</p>
      </Modal>,
    );

    expect(screen.getByTestId('modal-title')).toHaveTextContent(title);
  });
});
