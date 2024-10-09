<script setup>
import { useUsuariosStore } from '@/stores/usuarios'
import { ref } from 'vue'

const usuariosStore = useUsuariosStore()
const nombre = ref('')
const correo = ref('')

function handleAddUsuario() {
  usuariosStore.addUsuario({
    nombre: nombre.value,
    correo: correo.value
  })
  nombre.value = ''
  correo.value = ''
}
</script>

<template>
  <h1 class="text-center">Agregar usuarios</h1>
  <form @submit.prevent="handleAddUsuario" class="mb-4 p-4 bg-dark text-white">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input
        required
        type="text"
        class="form-control bg-white text-dark"
        id="nombre"
        v-model="nombre"
        placeholder="Ingresa tu nombre"
      />
    </div>
    <div class="mb-3">
      <label for="correo" class="form-label">Correo</label>
      <input
        required
        type="email"
        class="form-control bg-white text-dark"
        id="correo"
        v-model="correo"
        placeholder="Ingresa tu correo"
      />
    </div>
    <button class="btn btn-success" type="submit">Enviar</button>
  </form>
</template>
<style scoped></style>
