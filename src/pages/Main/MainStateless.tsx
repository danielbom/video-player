import { DeleteIcon, DragHandleIcon } from '@chakra-ui/icons'
import { As, Box, Button, Flex, Grid, GridItem, IconButton, Input, Spacer, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProps,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd'
import SmoothScrollbar from 'smooth-scrollbar'

import { MediaChromePlayer } from '../../components/MediaChromePlayer'
// import { VideoJsPlayer } from '../../components/VideoJsPlayer'
import { Episode } from './types'

type MainStatelessProps = {
  episodes: Episode[]
  selectedEpisode: Episode | undefined
  selectEpisode: (episode: Episode) => void
  removeEpisode: (episode: Episode) => void
  reorderEpisodes: (episodes: Episode[]) => void
  onConfirmEpisode: (episode: Episode) => void
}

export default function MainStateless({
  episodes,
  selectedEpisode,
  selectEpisode,
  removeEpisode,
  reorderEpisodes,
  onConfirmEpisode,
}: MainStatelessProps) {
  function onDragEndReorderEpisodes(result: DropResult, _provided: ResponderProvided) {
    const lastIndex = result.source.index
    const newIndex = result.destination?.index
    if (typeof newIndex === 'undefined' || newIndex === lastIndex) {
      return
    }
    const newEpisodes = [...episodes]
    const [removed] = newEpisodes.splice(lastIndex, 1)
    newEpisodes.splice(newIndex, 0, removed)
    reorderEpisodes(newEpisodes)
  }

  const videoPlayer = <MediaChromePlayer src={selectedEpisode?.src || ''} />
  const episodesList = (
    <EpisodesListDroppable onDragEnd={onDragEndReorderEpisodes}>
      {episodes.map((it, index) => (
        <EpisodeListItemDraggable
          key={'list-item-' + it.src}
          draggableId={'list-item-' + it.src}
          index={index}
          episode={it}
          selectedEpisode={selectedEpisode}
          selectEpisode={selectEpisode}
          removeEpisode={removeEpisode}
        />
      ))}
    </EpisodesListDroppable>
  )

  React.useLayoutEffect(() => {
    SmoothScrollbar.initAll()
  }, [])

  return (
    <Flex direction="column" alignItems="center" bg="gray.100" h="100vh">
      <Box maxW="1400px" w="100%" p="4">
        <EpisodeInput onConfirm={onConfirmEpisode} />

        <Spacer h="4" />

        <HorizontalLayout episodesList={episodesList} videoPlayer={videoPlayer} />

        <VerticalLayout episodesList={episodesList} videoPlayer={videoPlayer} />
      </Box>
    </Flex>
  )
}

type LayoutProps = {
  episodesList: React.ReactNode
  videoPlayer: React.ReactNode
}

function HorizontalLayout({ episodesList, videoPlayer }: LayoutProps) {
  return (
    <Grid templateColumns="2fr 6fr" gap="2" minW="800px" overflow="hidden" display={{ lg: 'grid', base: 'none' }}>
      <GridItem>
        <Box as="section" maxH="590px" data-scrollbar pr="2">
          {episodesList}
        </Box>
      </GridItem>

      <GridItem>{videoPlayer}</GridItem>
    </Grid>
  )
}

function VerticalLayout({ episodesList, videoPlayer }: LayoutProps) {
  return (
    <Box display={{ lg: 'none', base: 'block' }}>
      {videoPlayer}

      <Spacer h="4" />

      {episodesList}
    </Box>
  )
}

type EpisodeListItemProps = {
  episode: Episode
  selectedEpisode: Episode | undefined
  selectEpisode: (episode: Episode) => void
  removeEpisode: (episode: Episode) => void
  as?: As<any>
}

function EpisodeListItem({ as = 'li', episode, selectedEpisode, selectEpisode, removeEpisode }: EpisodeListItemProps) {
  const selected = selectedEpisode?.src === episode.src
  return (
    <Flex as={as} w="100%" mt="0">
      <Button
        size="lg"
        w="100%"
        borderRadius="none"
        justifyContent="flex-start"
        bg={selected ? 'red.500' : 'white'}
        colorScheme={selected ? 'red' : undefined}
        onClick={() => selectEpisode(episode)}
      >
        {episode.title}
      </Button>
      <IconButton
        icon={<DeleteIcon />}
        aria-label="Delete"
        size="lg"
        borderRadius="none"
        colorScheme={selected ? 'red' : undefined}
        bg={selected ? 'red.500' : 'white'}
        color={selected ? 'white' : 'red.600'}
        onClick={() => removeEpisode(episode)}
      />
    </Flex>
  )
}

type EpisodesListProps = {
  children: React.ReactNode
}

function EpisodesList({ children }: EpisodesListProps) {
  return (
    <UnorderedList spacing="2" listStyleType="none" m="0">
      {children}
    </UnorderedList>
  )
}

type EpisodeListItemDraggableProps = EpisodeListItemProps & {
  index: number
  draggableId: string
}

function EpisodeListItemDraggable({ index, draggableId, ...props }: EpisodeListItemDraggableProps) {
  const selected = props.selectedEpisode?.src === props.episode.src
  return (
    <Draggable key={draggableId} draggableId={draggableId} index={index}>
      {(provided) => (
        <Flex as="li" m="0" ref={provided.innerRef} {...provided.draggableProps} {...(provided.dragHandleProps as any)}>
          <IconButton
            icon={<DragHandleIcon />}
            aria-label="Delete"
            size="lg"
            borderRadius="none"
            colorScheme={selected ? 'red' : undefined}
            bg={selected ? 'red.500' : 'white'}
            color={selected ? 'white' : 'black'}
          />
          <EpisodeListItem as="div" {...props} />
        </Flex>
      )}
    </Draggable>
  )
}

type EpisodesListDraggableProps = EpisodesListProps & {
  onDragEnd: (result: DropResult, provided: ResponderProvided) => void
}

function EpisodesListDroppable({ onDragEnd, ...props }: EpisodesListDraggableProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="episodes">
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            <EpisodesList {...props} />
            {provided.placeholder}
          </Box>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  )
}

type EpisodeInputProps = {
  onConfirm: (episode: Episode) => void
}

function EpisodeInput({ onConfirm }: EpisodeInputProps) {
  const nameInputRef = React.useRef<HTMLInputElement>(null)
  const srcInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <Flex alignItems="center" gap="4">
      <Input ref={nameInputRef} placeholder="Title" size="lg" variant="filled" bg="white" color="gray.700" flex={2} />
      <Input
        ref={srcInputRef}
        placeholder="Video source"
        size="lg"
        variant="filled"
        bg="white"
        color="gray.700"
        flex={4}
      />
      <Button
        onClick={() => onConfirm({ src: srcInputRef.current!.value, title: nameInputRef.current!.value })}
        size="lg"
        variant="solid"
        colorScheme="red"
        flex={1}
      >
        Confirm
      </Button>
    </Flex>
  )
}

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  // https://medium.com/@wbern/getting-react-18s-strict-mode-to-work-with-react-beautiful-dnd-47bc909348e4
  // Credits to https://github.com/GiovanniACamacho and https://github.com/Meligy for the TypeScript version
  // Original post: https://github.com/atlassian/react-beautiful-dnd/issues/2399#issuecomment-1175638194

  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return <Droppable {...props}>{children}</Droppable>
}
