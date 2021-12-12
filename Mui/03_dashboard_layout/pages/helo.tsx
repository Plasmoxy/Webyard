
import { GetServerSideProps, NextPage } from 'next'
import React, {FC} from 'react'
import { Layout } from '../components/layout/Layout'
import { fbAdminAuth } from '../firebase/fbAdmin'


const HeloPage: NextPage = (props) => {
  return <Layout>
    a
    <div style={{height: 10000}} />
  </Layout>
}


export default HeloPage

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  
  const token = req.cookies['dashbord-dev-fbtoken']
  if (token == '') return { redirect: {destination: '/login'}, props: {} }
  
  console.log(token)
  const tokenVerify = await fbAdminAuth.verifyIdToken(token)
  console.log(tokenVerify.uid)
  
  return {
    props: {}
  }
}
