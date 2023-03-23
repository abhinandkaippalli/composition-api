<template>
    <div class="container w-50">
        <form @submit.prevent="addNewWonder">
            <legend>Add New Wonder</legend>
            <div class="mb-3">
                <label for="txtName" class="form-label">Name</label>
                <input type="text" v-model="newWonder.name" class="form-control" id="txtName">
            </div>
            <div class="mb-3">
                <label for="txtLocation" class="form-label">Location</label>
                <input type="text" v-model="newWonder.location" class="form-control" id="txtLocation">
            </div>
            <div class="mb-3">
                <label for="txtImageUrl" class="form-label">Image Url</label>
                <input type="text" v-model="newWonder.imageUrl" class="form-control" id="txtImageUrl">
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
    <pre>{{ newWonder }}</pre>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const newWonder = reactive({
    name: '',
    location: '',
    imageUrl: ''
})

const router = useRouter()

const addNewWonder = () => {
    axios.post('http://localhost:3000/wonders', newWonder)
        .then(() => {
            router.push('/')
        }).catch((error) => {
            console.log(error);
        })
}
</script>
<style></style>