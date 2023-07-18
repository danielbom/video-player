import { Select } from '@chakra-ui/react'
import { PlayerKind, players } from '../../components/VideoPlayer'

export type SelectPlayerProps = {
  value: PlayerKind
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function PlayerSelect({ value, onChange }: SelectPlayerProps) {
  return (
    <Select value={value} onChange={onChange} variant="filled" mb={2} size="lg">
      {players.map((player) => (
        <option key={'select-option-' + player} value={player}>
          {player}
        </option>
      ))}
    </Select>
  )
}
