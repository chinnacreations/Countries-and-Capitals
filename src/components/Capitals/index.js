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
    activeId: countryAndCapitalsList[0].id,
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )
    return activeCountry.country
  }

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-con">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="desc">is capital of which country?</p>
          </div>
          <p className="heading">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
