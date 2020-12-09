import React from 'react';
import PropTypes from 'prop-types';
import { padLeft, range } from '../utility';

class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedYear: props.year,
      selectedMonth: props.month,
    }
  }

  toggleDropdown = (event) => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  selectedYear = (event, yearnumber) => {
    event.preventDefault()
    this.setState({
      selectedYear: yearnumber
    })
  }

  selectedMonth = (event, monthnumber) => {
    event.preventDefault();
    this.setState({
      isOpen: false,
      selectedMonth: monthnumber
    })
    this.props.onChange(this.state.selectedYear, monthnumber);
  }

  render() {
    const { year, month } = this.props
    const { isOpen, selectedYear, selectedMonth } = this.state
    const monthRange = range(12, 1)
    const yearRange = range(9, -4).map(number => number + year)

    return (
      <div className="dropdown month-picker-component">
        <h4>选择月份</h4>
        <button
          id="dropdownMenuButton"
          className="btn btn-lg btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toggleDropdown}
        >
          {`${selectedYear}年 ${padLeft(selectedMonth)}月`}
        </button>
        { isOpen &&
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ display: 'block' }}>
            <div className="row">
              <div className="col border-right">
                {yearRange.map((yearnumber, index) =>
                  <a
                    key={index}
                    href="#"
                    className={(yearnumber === selectedYear) ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={(event) => {this.selectedYear(event, yearnumber)}}
                  >{yearnumber} 年</a>
                )}
              </div>
              <div className="col border-left">
                {monthRange.map((monthnumber, index) =>
                  <a
                    key={index}
                    href="#"
                    className={(monthnumber === selectedMonth) ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={(event) => {this.selectedMonth(event, monthnumber)}}
                  >{padLeft(monthnumber)} 月</a>
                )}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MonthPicker;