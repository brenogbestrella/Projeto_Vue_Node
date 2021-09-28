<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-table bordered dark striped hover :items="posts" :fields="fields">
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from '@/service/api.js'

export default {
  name: 'App',
  data () {
    return {
      fields: ['id', 'nome', 'age'],
      items: [],
      posts: []
    }
  },
  mounted () {
    api.get('/users').then(response => {
      console.log(response)
      this.posts = response.data
    })
  }
}
</script>
