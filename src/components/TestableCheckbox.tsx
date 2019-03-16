import React from 'react';

type TestableCheckboxProps = {
  labelOn: string;
  labelOff: string;
};

type TestableCheckboxState = {
  isChecked: boolean;
};

export class TestableCheckbox extends React.Component<TestableCheckboxProps, TestableCheckboxState> {
  constructor(props: TestableCheckboxProps) {
    super(props);
    this.state = { isChecked: false };
  }

  public render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }

  private onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }
}