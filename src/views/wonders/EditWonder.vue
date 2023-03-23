<template>
    <div class="container w-50">
        <form @submit.prevent="editWonder">
            <legend>Edit New Wonder</legend>
            <div class="mb-3">
                <label for="txtName" class="form-label">Name</label>
                <input type="text" v-model="updateWonder.name" class="form-control" id="txtName">
            </div>
            <div class="mb-3">
                <label for="txtLocation" class="form-label">Location</label>
                <input type="text" v-model="updateWonder.location" class="form-control" id="txtLocation">
            </div>
            <div class="mb-3">
                <label for="txtImageUrl" class="form-label">Image Url</label>
                <input type="text" v-model="updateWonder.imageUrl" class="form-control" id="txtImageUrl">
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const updateWonder = reactive({
    name: '',
    location: '',
    imageUrl: ''
})

const route = useRoute()
const router = useRouter()

onMounted(() => {   
    axios.get(`http://localhost:3000/wonders/${route.params.id}`)
    .then((res) => {
        updateWonder.name = res.data.name
        updateWonder.location = res.data.location
        updateWonder.imageUrl = res.data.imageUrl
    }).catch((error) => {
        console.log(error);
    })
})

const editWonder = () => {
    axios.put(`http://localhost:3000/wonders/${route.params.id}`, updateWonder)
    .then(() => {
        router.push('/')
    }).catch((error) => {
        console.log(error);
    })
}

</script>
<style>
    
</style>