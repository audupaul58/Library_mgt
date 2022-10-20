import React, { useState } from 'react';
import styles from './Login.module.scss';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import  {useRouter} from 'next/router'
import {signIn} from "next-auth/react"

const LoginDia = () => {

    const [show, setShow] = useState(false);

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


    

    const handleClose = () => setShow(!show);
    const handleShow = () => setShow(true);

  return (
    <>
    <div className={styles.toggler} onClick={handleShow}>
        <button><strong>Login</strong></button>
    </div>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.logForm}>
    <input type="text" placeholder='Username' {...register("username", { required: true })} />
    {errors.email && <span style={{ color: "red" }}>
     *Email* is mandatory </span>}
    <input type="password" placeholder='Password' {...register("password")} />
    <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
  </form>
      </Modal.Body>
      
    </Modal>
  </>
  )
}

export default LoginDia