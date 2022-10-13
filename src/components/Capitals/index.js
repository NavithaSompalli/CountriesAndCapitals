import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    countryId: countryAndCapitalsList[0].country,
  }

  selectCountryName = event => {
    this.setState({countryId: event.target.value})
  }

  render() {
    const {countryId} = this.state
    console.log(countryId)
    return (
      <div className="app-container">
        <div className="capitals-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="countries-and-capitals-container">
            <select
              onChange={this.selectCountryName}
              className="select-input-container"
              value={countryId}
            >
              {countryAndCapitalsList.map(options => (
                <option key={options.id} value={options.country}>
                  {options.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country-name">{countryId}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
