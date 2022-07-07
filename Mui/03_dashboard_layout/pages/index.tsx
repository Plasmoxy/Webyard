import { Box, Button, Card, Container, Paper, Typography } from '@mui/material'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { fbFirestore } from '../firebase/firebase'


const Home: NextPage = () => {
  
  const [dogs, setDogs] = useState<any>()
  
  const dogadd = useCallback(async () => {
    const dogs = collection(fbFirestore, 'dogs')
    const kekso = await addDoc(dogs, {name: 'kekso'})
    console.log(kekso)
  }, [])
  
  const dogread = useCallback(async () => {
    const dogs = collection(fbFirestore, 'dogs')
    const snap = await getDocs(dogs)
    console.log(snap.docs.map(d => ({id: d.id, ...d.data()})))
  }, [])
  
  return <Layout>
    <Typography variant='h4' sx={{py: 1}}>Welcome</Typography>
    
    <Button onClick={dogadd}>Add dog</Button>
    <Button onClick={dogread}>Read dog</Button>
    
  </Layout>
}

export default Home