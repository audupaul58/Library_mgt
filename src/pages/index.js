import { Container } from 'react-bootstrap'
import {signOut, useSession} from 'next-auth/react'
import HomePage from '../Components/Inventory/ItemList/Home'
import MainPage from '../Components/Inventory/ItemList/main'
import Layout from '../Components/Layout/Layout'
import styles from '../styles/Home.module.scss'
import {useRouter } from 'next/router'



export default function Home({data}) {

      const router = useRouter()  

      const {data:session, status } = useSession({
        required: true,
      })

      console.log("session", session.user)
      console.log("status", status)
      if(!session){
        return <></>
      }

     
  return (
    <Layout>
    <Container className={styles.container}>
        <h1>hello {user.username}</h1>
       {status ==='authenticated' ? <HomePage  data={data} />: <MainPage data={data} />}
    </Container>
    </Layout>
  )
}

export const getStaticProps = async (context)=>{
  const response =  await fetch('http://localhost:8000/inventory/')
  const data = await response.json()
  
  return{
    props:{
      data,
      
      
    }
  }
}