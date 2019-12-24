/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'react-router-dom'
import { useTransit } from '@blockmatic/eosio-hooks'
const { Button } = require('@theme-ui/components')

export default function Navigation() {
  const { connectScatter } = useTransit()

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Button onClick={connectScatter}>Login with Scatter</Button>
    </div>
  )
}
