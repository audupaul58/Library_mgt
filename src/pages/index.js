import { Container } from 'react-bootstrap'
import ItemList from '../Components/Inventory/ItemList/ItemList'
import Layout from '../Components/Layout/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
    <Container className={styles.container}>
       
        <ItemList/>

    </Container>
    </Layout>
  )
}
