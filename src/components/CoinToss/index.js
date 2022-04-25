// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.heads + 1,
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, imgUrl} = this.state

    return (
      <div className="toss-game">
        <div className="toss-coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imgUrl} className="tossedCoin" alt="toss result" />
          <div className="btn-cont">
            <button
              type="button"
              className="toss-btn"
              onClick={this.onClickTossButton}
            >
              Toss Coin
            </button>
          </div>
          <div className="toss-count">
            <p className="counts">Total: {total}</p>
            <p className="counts">Heads: {heads}</p>
            <p className="counts">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
