import React from 'react'
import styles from '../styles/signin.module.scss';
import {useForm} from 'react-hook-form'
import {signIn} from "next-auth/react"
import  {useRouter} from 'next/router'
import Layout from '../Components/Layout/Layout';
import MainPage from '../Components/Inventory/ItemList/main'


const Signin = ({data}) => {

  const router = useRouter()

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
      console.log(data)
      signIn("credentials", {
          ...data,
          redirect: false,
      }).then(response => {
        console.log(response)
        router.push('/')
      }).catch(error => {
        console.log(error)
      })
  }


  return (
    <Layout>
       <MainPage  data={data} />
  </Layout>
  )
}

export default Signin

export const getStaticProps = async (context)=>{
  const response =  await fetch('http://localhost:8000/inventory/')
  const data = await response.json()
  
  return{
    props:{
      data,
      
      
    }
  }
}