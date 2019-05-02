import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { StyledModal, ModalContainer, ModalHeader, ModalBody, ModalClose } from './ModalStyle';

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
};

type ModalAllProps = ModalProps;

export class Modal extends React.Component<ModalAllProps> {
  private body: HTMLBodyElement | null = null;

  public componentDidMount(): void {
    this.body = document.querySelector('body');
  }

  public componentDidUpdate(prevProps: ModalAllProps): void {
    const body = document.querySelector('body');
    const openDidNotChange = prevProps.open === this.props.open;

    if (!body || openDidNotChange) {
      return;
    }

    if (this.props.open === true) {
      body.classList.add('no-scroll');

      if (this.body) {
        this.body.style.paddingRight = `${this.getScrollbarWidth()}px`;
      }
    } else {
      body.classList.remove('no-scroll');

      if (this.body) {
        this.body.style.paddingRight = `0px`;
      }
    }
  }

  public render(): JSX.Element | null {
    const { open, title, onClose } = this.props;

    return (
      <StyledModal open={open}>
        <OutsideClickHandler onOutsideClick={open ? onClose : () => { /* */ }}>
          <ModalContainer>
            <ModalHeader>
              {title &&
                <h5>{title}</h5>
              }
              <ModalClose onClick={onClose}>
                &times;
              </ModalClose>
            </ModalHeader>
            <ModalBody>
              {this.props.children}
            </ModalBody>
          </ModalContainer>
        </OutsideClickHandler>
      </StyledModal>
    );
  }

  private getScrollbarWidth = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;

    if (outer.parentNode) {
      outer.parentNode.removeChild(outer);
    }

    return widthNoScroll - widthWithScroll;
  }
}