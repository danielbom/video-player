import { useToast } from '@chakra-ui/react'
import React from 'react'

import { storage } from '../../storage'
import MainStateless from './MainStateless'
import { Episode } from './types'

export default function Main() {
  const toast = useToast()
  const [episodes, setEpisodes] = React.useState<Episode[]>([])
  const [selectedEpisode, setSelectedEpisode] = React.useState<Episode>()
  console.count('Main')

  const showError = (title: string) => toast({ status: 'error', title, isClosable: true })
  const showSuccess = (title: string) => toast({ status: 'success', title, isClosable: true })

  const setEpisodesAndMemorize = (episodes: Episode[]) => {
    storage.episodes.setJson(episodes)
    setEpisodes(episodes)
  }

  const setSelectedEpisodeAndMemorize = (episode: Episode) => {
    storage.lastEpisode.setValue(episode.src)
    setSelectedEpisode(episode)
  }

  const removeEpisodeAndMemorize = (episode: Episode) => {
    const newEpisodes = episodes.filter((it) => it.src !== episode.src)
    setEpisodesAndMemorize(newEpisodes)
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

    setEpisodesAndMemorize([...episodes, newEpisode])
    setSelectedEpisodeAndMemorize(newEpisode)
  }

  React.useEffect(() => {
    const episodeKey = storage.lastEpisode.getValue()
    if (episodeKey) {
      const episode = episodes.find((it) => it.src === episodeKey)
      if (episode) {
        setSelectedEpisode(episode!)
      }
    }
  }, [episodes])

  React.useEffect(() => {
    const storagedEpisodes = storage.episodes.getJson<Episode[]>()
    if (storagedEpisodes) {
      setEpisodes(storagedEpisodes)
    }
  }, [])

  return (
    <MainStateless
      episodes={episodes}
      onConfirmEpisode={onConfirmEpisode}
      removeEpisode={removeEpisodeAndMemorize}
      selectedEpisode={selectedEpisode}
      selectEpisode={setSelectedEpisodeAndMemorize}
      reorderEpisodes={setEpisodesAndMemorize}
    />
  )
}
