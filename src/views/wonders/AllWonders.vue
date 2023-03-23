<template>
    <div class="container">
        <div class="row m-3">
            <div class="col col-md-4 offset-md-4">
                <router-link to="/add-wonder" class="btn btn-primary">Add</router-link>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in allWonders" :key="item">
                <div class="card">
                    <img :src="item.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">
                            Location - {{ item.location }}
                        </p>
                        <router-link :to="`/edit-wonder/${item.id}`" class="btn btn-primary">Edit</router-link> |
                        <button type="button" class="btn btn-danger" @click="openDeletePopup(item.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ConfirmDeletePopup @confirm-delete-clicked="confirmDelete" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ConfirmDeletePopup from '../../components/ConfirmDeletePopup.vue'

const allWonders = ref([])
const itemIdDelete = ref(0)
let myModal

onMounted(() => {
    myModal = new bootstrap.Modal(document.getElementById('deletePopup'))
    axios.get('http://localhost:3000/wonders')
        .then((res) => {
            const result = res.data;
            allWonders.value = result
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
})

const openDeletePopup = (id) => {
    itemIdDelete.value = id
    myModal.show()
}

const confirmDelete = () => {
    axios.delete(`http://localhost:3000/wonders/${itemIdDelete.value}`)
    .then(() => {
        allWonders.value = allWonders.value.filter((e) => e.id !== itemIdDelete.value)
        myModal.hide()
    }).catch((error) => {
       console.log(error);
    })
}

</script>

<style></style>
