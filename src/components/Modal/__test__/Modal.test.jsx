import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div />,
}));

describe('Modal', () => {
  const title = 'Skills';
  const onClose = () => false;
  const isOpen = false;
  const children = 'Modal content';

  it('should render the modal title', () => {
    render(
      <Modal
        title={ title }
        onClose={ onClose }
        isOpen={ isOpen }
      >
        { children }
      </Modal>,
    );

    expect(screen.getByTestId('modal-title')).toHaveTextContent(title);
  });

  it('should render the children in the body modal', () => {
    render(
      <Modal
        title={ title }
        onClose={ onClose }
        isOpen={ isOpen }
      >
        { children }
      </Modal>,
    );

    expect(screen.getByTestId('modal-body')).toHaveTextContent(children);
  });

  it('should be hidden if isOpen is false', () => {
    render(
      <Modal
        title={ title }
        onClose={ onClose }
        isOpen={ false }
      >
        { children }
      </Modal>,
    );

    expect(screen.getByTestId('modal-wrapper').className).toContain('--hidden');
  });

  it('should not be hidden if isOpen is true', () => {
    render(
      <Modal
        title={ title }
        onClose={ onClose }
        isOpen
      >
        { children }
      </Modal>,
    );

    expect(screen.getByTestId('modal-wrapper').className).not.toContain('--hidden');
  });

  it('should render the hederContent', () => {
    const headerString = 'content';
    render(
      <Modal
        title={ title }
        onClose={ onClose }
        isOpen={ isOpen }
        headerContent={ headerString }
      >
        { children }
      </Modal>,
    );

    expect(screen.getByTestId('modal-header-right-corner')).toHaveTextContent(headerString);
  });

  it('should render the footerContent', () => {
    const footerSring = 'content';
    render(
      <Modal
        title={ title }
        onClose={ onClose }
        isOpen={ isOpen }
        footerContent={ footerSring }
      >
        { children }
      </Modal>,
    );

    expect(screen.getByTestId('modal-footer')).toHaveTextContent(footerSring);
  });
});
