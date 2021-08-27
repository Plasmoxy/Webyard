import { Box, Button, Center, Checkbox, Container, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spacer, useCheckbox, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ModalFooter } from 'react-bootstrap'
import './App.css'

export default function App() {
  
  const [isOpen, setOpen] = useState(false)
  const toast = useToast()
  const cb = useCheckbox()
  
  return (
    <Container maxW="container.lg">
      
      <Center p={20}>
        <Text as="i" fontSize="5xl" >Welcome to App</Text>
      </Center>
      
      <Button m={1} colorScheme="blue">Eyooo</Button>
      <Button m={1} colorScheme="red" onClick={() => setOpen(true)}>Open modal</Button>
      <Button m={1} onClick={() => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }}>Show Toast</Button>
      
      <Box m={1} bg="red.600" maxW="fit-content" shadow="lg" borderRadius={12} p={5}>
        <Box>yiosh</Box>
        <Box>Bum</Box>
        <Checkbox />
      </Box>
      
      
      
      <Modal isOpen={isOpen} onClose={() => () => setOpen(false)} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton onClick={() => setOpen(false)} />
          <ModalBody>d</ModalBody>
          <ModalFooter>
            <Flex p={4}>
              <Spacer />
              <Button colorScheme="blue" mr={3} onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  )
}