import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import styles from './itemList.module.scss';
import { Container, Button} from 'react-bootstrap'
import SearchItem from '../../SearchFilter/Search';
import FilterItem from '../../SearchFilter/filter';
import { FaSort } from "react-icons/fa";



const ItemList = ({data}) => {

  const [searchText, setSearchText] = useState('')

  const [value, setValue] = useState()

  const [direction, setDirection] = useState()


  const handleSort = ()=>{
    if(!direction)setDirection('dsc')
    else if(direction === 'dsc')setDirection('asc')
    else(setDirection(null))
  }


  const filterValue = (value)=>{
    handleSort()
    setValue(value)
  }


  const sorttedList = FilterItem(data, value, direction)

  const searchFilterbyItem = sorttedList.filter((text)=>{
    return ( text.name.toLowerCase().includes(searchText) || 
    text.category.toLowerCase().includes(searchText) ||
    text.isbn.toLowerCase().includes(searchText)
)})
 
  return (
    <Container >
       <div className={styles.search}> 
          <h3>Stock List</h3>
          <h2><SearchItem searchText={searchText} setSearchText={setSearchText}/></h2>

       </div>
        <hr/>
        <Table hover className={styles.container}>
      <thead>
        <tr>
         
          <th>NAME <FaSort onClick={()=>filterValue('name')} /></th>
          <th>ISBN <FaSort onClick={()=>filterValue('isbn')} /></th>
          <th>CATG <FaSort onClick={()=>filterValue('category')} /></th>
          <th>QTITY <FaSort onClick={()=>filterValue('total_quantity')} /></th>
          <th>PRICE <FaSort onClick={()=>filterValue('price')} /></th>
          <th>ISSUED <FaSort onClick={()=>filterValue('issued_quantity')} /></th>
          <th>BALANCE <FaSort onClick={()=>filterValue('available_quantity')} /></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.length ? searchFilterbyItem.map((item, index)=>(
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