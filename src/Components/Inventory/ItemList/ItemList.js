import React from 'react'
import Table from 'react-bootstrap/Table';
import styles from './itemList.module.scss';
import { Container} from 'react-bootstrap'
import useSWR, {mutate} from 'swr';

const baseUrl = 'http://localhost:8000/inventory/'

const ItemList = ({data}) => {

  const {data, errors} = useSWR(baseUrl)

  if(!data) return

  return (
    <Container >
        <h3>Stock List</h3>
        <hr/>
        <Table hover className={styles.container}>
      <thead>
        <tr>
         
          <th>NAME</th>
          <th>ISBN</th>
          <th>CATEGORY</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>ISSUED</th>
          <th>BALANCE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.length ? data.map((item, index)=>(
             <tr key={index}>
             <td>{item.name}</td>
             <td>{item.isbn}</td>
             <td>{item.category}</td>
             <td>{item.total_quantity}</td>
             <td>{item.price}</td>
             <td>{item.issued_quantity}</td>
             <td>{item.available_quantity}</td>
            
             <td><button>View</button></td>
           </tr>
        )): null}
       
       
      </tbody>
    </Table>
    </Container>
  )
}

export default ItemList