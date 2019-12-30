/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'react-router-dom'
import { useTransit } from '@blockmatic/eosio-hooks'
const { NavLink, Button } = require('@theme-ui/components')

export default function Navigation() {
  const { connectScatter } = useTransit()

  return (
  // TODO: use appropriate tag for logo

    <Flex
      as="nav"
      sx={{
        justifyContent: 'space-around',
      }}
    >
      <NavLink as={Link} to="/" p={2}>
        Logo here
      </NavLink>
      <NavLink as={Link} to="/" p={2}>
        Home
      </NavLink>
      <NavLink as={Link} to="/about" p={2}>
        About
      </NavLink>
      <NavLink as={Link} to="/profile" p={2}>
        Profile
      </NavLink>
      <Button onClick={connectScatter}>Login with Scatter</Button>
    </Flex>
  )
}
