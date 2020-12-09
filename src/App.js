import React, { Component } from 'react';
import './App.css';
import PriceList from './components/PriceList';
import TotalPrice from './components/TotalPrice';
import ViewTab from './components/ViewTab';
import MonthPicker from './components/MonthPicker';
import { LIST_VIEW, CHART_VIEW } from './utility';

const items = [
  {
    "id": 1,
    "title": "去秦皇岛",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }, {
    "id": 2,
    "title": "打架斗殴",
    "price": 1000,
    "date": "2018-09-10",
    "category": {
      "id": 1,
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: LIST_VIEW
    }
    this.handleChangeView = this.handleChangeView.bind(this)
  }

  handleChangeView(view) {
    switch (view) {
      case 'list':
        this.setState({
          view: LIST_VIEW
        })
        break;
      case 'chart':
        this.setState({
          view: CHART_VIEW
        })
        break;
    
      default:
        break;
    }
  }

  render() {
    
    return (
      <div className="App">
        <TotalPrice income={1000} outcome={20000} />
        <MonthPicker
          year={2020}
          month={2}
          onChange={(year, month) => console.log(year, month)}
        />
        <ViewTab
          activeTab={this.state.view}
          onTabChange={(view) => {this.handleChangeView(view)}}
        ></ViewTab>
        <PriceList
          items={items}
          onModifyItem={(item) => { alert(item.id) }}
          onDeleteItem={(item) => { alert('delete' + item.id) }}
        />
      </div>
    )
  }
}

export default App;
