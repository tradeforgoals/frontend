// This file is created because of SSR reasons
// Problem used to be: ReactDOM.hydrate was called AFTER withSizes triggered
// Which caused the component to look how it was rendered serverside, which is mobile OR desktop
import React from 'react';
import debounce from 'lodash/debounce';

type InputSizes = {
  width: number;
  height: number;
};

type Sizes = {
  [key: string]: boolean
};

type SizesToProps = (sizes: InputSizes) => (Sizes);

type WithSizesState = {
  sizes: {
    [key: string]: boolean;
  }
};

type AnyComponent = any;

export const withSizes =
  (mappedSizesToProps: SizesToProps) =>
  <T extends WithSizesState>(WrappedComponent: React.ComponentType<AnyComponent>): AnyComponent => {
      class WithSizes extends React.Component<T, WithSizesState> {
        public defaultWidth = 1280;
        public defaultHeight = 900;
        public state = {
          sizes: mappedSizesToProps({ width: this.defaultWidth, height: this.defaultHeight })
        };

        private throttledHandleWindowResize: () => void = debounce(this.setWindowSize.bind(this), 250);

        public componentDidMount(): void {
          window.addEventListener('resize', this.throttledHandleWindowResize);
          this.setWindowSize();
        }

        public componentWillUnmount(): void {
          window.removeEventListener('resize', this.throttledHandleWindowResize);
        }

        public render(): JSX.Element {
          return (
            <WrappedComponent {...this.state.sizes} {...this.props} />
          );
        }

        private setWindowSize(): void {
          this.setState({
            sizes: mappedSizesToProps({
              width: window.innerWidth,
              height: window.innerHeight
            })
          });
        }
      }

      // @ts-ignore non-understandable TS issue
      return WithSizes;
    };