import { useToast } from '@chakra-ui/react'

import MainStateless from './MainStateless'
import { Episode } from './types'
import useStateStorage from '../../hooks/useStateStorage'

export default function Main() {
  const toast = useToast()
  const [episodes, setEpisodes] = useStateStorage<Episode[]>('episodes', [])
  const [selectedEpisode, setSelectedEpisode] = useStateStorage<Episode | undefined>('lastEpisode')

  const showError = (title: string) => toast({ status: 'error', title, isClosable: true })
  const showSuccess = (title: string) => toast({ status: 'success', title, isClosable: true })

  const removeEpisode = (episode: Episode) => {
    const newEpisodes = episodes.filter((it) => it.src !== episode.src)
    setEpisodes(newEpisodes)
    if (selectedEpisode?.src === episode.src) {
      setSelectedEpisode(undefined)
    }
    showSuccess('Episode removed')
  }

  const onConfirmEpisode = (newEpisode: Episode) => {
    if (!newEpisode.title) {
      return showError('Title cannot be empty')
    }

    if (!newEpisode.src) {
      return showError('Source cannot be empty')
    }

    const episodeAlreadyExists = episodes.find((it) => it.src === newEpisode.src)

    if (episodeAlreadyExists) {
      return showError('Episode already exists')
    }

    setEpisodes([...episodes, newEpisode])
    setSelectedEpisode(newEpisode)
  }

  return (
    <MainStateless
      episodes={episodes}
      onConfirmEpisode={onConfirmEpisode}
      removeEpisode={removeEpisode}
      selectedEpisode={selectedEpisode}
      selectEpisode={setSelectedEpisode}
      reorderEpisodes={setEpisodes}
    />
  )
}
