/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useTransitState } from '@blockmatic/eosio-hooks'

export default function Profile() {
  const transitState = useTransitState()
  return (
    <div>
      <pre sx={{ color: 'green', background: 'rgba(0,0,0,.9)' }}>{JSON.stringify(transitState, null, 2)}</pre>
    </div>
  )
}
