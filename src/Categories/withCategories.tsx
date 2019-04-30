import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from '../store/RootState';
import { CategoriesState, Category } from './CategoriesState';
import { setCategoriesAction, getCategoriesAction } from './CategoriesActions';

interface StateProps {
  categories: CategoriesState;
}

interface DispatchProps {
  setCategories: (payload: Category[]) => void;
  getCategories: () => void;
}

export interface WithCategoriesProps extends StateProps, DispatchProps { }

export function withCategories(Component: any): any {

  type WrappedComponentProps = WithCategoriesProps;
  class WrapperComponent extends React.Component<WrappedComponentProps> {
    public componentDidMount(): void {
      if (this.props.categories.data.length === 0 && !this.props.categories.loading) {
        this.props.getCategories();
      }
    }

    public render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  const mapStateToProps = (state: RootState): StateProps => {
    return {
      categories: state.categories
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
    return {
      setCategories: (payload: Category[]) => dispatch(setCategoriesAction(payload)),
      getCategories: () => dispatch(getCategoriesAction())
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
}
