import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
	  	<a href="https://twitter.com/ikaikahussey">
          On Twitter
        </a>
      </p>
    )
  }
}

export default Bio
