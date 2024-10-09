import { defineStore } from 'pinia'
//ref sirve para convertir una variable a reactiva
import { ref } from 'vue'
//se usan conectores para poblar usuarios a traves de conectores ya configurados
import { $db } from '@/firebaseApp'
import { collection, onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore'

export const useUsuariosStore = defineStore('usuarios', () => {
  const usuarios = ref([])
  const usuariosRef = collection($db, 'usuarios') //collection son todos los registros de la colección en cambio, documento es un registro de una colección

  async function fetchUsuarios() {
    //fetch irá a buscar a los usuarios
    try {
      //traer usuarios desde nuestra base de datos, usando una referencia de la colección

      //onSnapshot trae una suerte de copia de la base de datos
      //snapshot es una copia de la colección
      //snap.shot que es la colección mas .docs traera el arreglo con todos los usuarios
      //. map convertira un arreglo a un formato utilizable para entregarle todos los usarios a usuarios.value que es la variable reactiva
      onSnapshot(usuariosRef, (snapshot) => {
        usuarios.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      })
    } catch (error) {
      console.error(error)
    }
  }
  async function addUsuario(data) {
    try {
      await addDoc(usuariosRef, data)
      //metodo para agregar un documento a esta tabla
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteUsuario(id) {
    try {
      const usuarioRef = doc($db, 'usuarios', id)

      await deleteDoc(usuarioRef)
    } catch (error) {
      console.error(error)
    }
  }
  //cuando usamos la función flecha dentro de nuestro store debemos retornar lo que queremos usar
  return {
    usuarios,
    fetchUsuarios,
    addUsuario,
    deleteUsuario
  }
})
