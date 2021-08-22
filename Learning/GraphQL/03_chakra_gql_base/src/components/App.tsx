import { Box, Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ModalFooter } from 'react-bootstrap'
import './App.css'

export default function App() {
  
  const [isOpen, setOpen] = useState(false)
  
  return (
    <Container mt={20} maxW="container.lg">
      <Button colorScheme="blue">Eyooo</Button>
      <Box
        maxW="fit-content"
        bg="white"
        mt={5}
        shadow="lg"
        borderRadius={12}
        p={5}
      >
        <Box onClick={() => setOpen(true)}>yiosh</Box>
        <Box>Bum</Box>
      </Box>
      <Modal isOpen={isOpen} onClose={() => () => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>d</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  )
}