import { Container } from 'react-bootstrap'
import ItemList from '../Components/Inventory/ItemList/ItemList'
import Layout from '../Components/Layout/Layout'
import styles from '../styles/Home.module.scss'

export default function Home({data}) {

  console.log(data)


  return (
    <Layout>
    <Container className={styles.container}>
       
        <ItemList data={data}/>

    </Container>
    </Layout>
  )
}

export const getStaticProps = async ()=>{
  const response =  await fetch('http://localhost:8000/inventory/')
  const data = await response.json()

  return{
    props:{
      data
    }
  }
}