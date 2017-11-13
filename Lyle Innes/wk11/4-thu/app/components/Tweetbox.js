import React from 'react'
import './Tweetbox.css'

export default class Tweetbox extends React.Component {

  constructor(props) {
    super(props)

    this.onTextAreaChange = this.onTextAreaChange.bind(this)

    this.state = {
      maxTweetLength: 50,
      content: ''
    }

  }

  onTextAreaChange(event) {
    this.setState({ content: event.target.value })
    console.log(this.state.content)
  }
  
  render() {
    const { maxTweetLength, content } = this.state
    const isDisabled = content.length === 0 || content.length > maxTweetLength
    const charsLeft = maxTweetLength - content.length
    const spanClass = charsLeft < 20 ? 'warning' : '' // this does the same as below
    // var spanClass = ''
    // if ( charsLeft < 10) {
    //   spanClass = 'warning'
    // }

    return <div>
      <textarea
      onChange={this.onTextAreaChange}
      placeholder="what's up?"></textarea>
      <span className={spanClass}>{maxTweetLength - content.length}</span>
      <button disabled={isDisabled}>tweet</button>
    </div>
  }
}