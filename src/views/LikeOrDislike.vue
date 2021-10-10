<template>
  <h1>Like or Dislike</h1>
  <div class="row">
    <img
      :src="imageUrl"
      class="rounded mx-auto d-block dog-photo"
      alt="Dog photo"
    >
  </div>
  <div class="row">
    <h2 class="text-center">{{ dogName }}</h2>
  </div>
  <div class="row">
    <div class="col-6 text-end">
      <button type="button" class="btn btn-danger .btn-lg" @click="dislike">Dislike</button>
    </div>
    <div class="col-6">
      <button type="button" class="btn btn-success .btn-lg" @click="like">Like</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dogId: '',
      dogName: '',
      imageUrl: '',
    };
  },
  methods: {
    loadRandomDog() {
      fetch('/api/v1/dogs')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Could not load a dog');
        })
        .then((data) => {
          this.dogName = data.name;
          this.imageUrl = data.imageUrl;
          this.dogId = data.id;
        });
    },
    like() {
      fetch('api/v1/dogs/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.dogId,
        }),
      })
        .then((response) => {
          if (response.ok) {
            this.loadRandomDog();
          } else {
            throw new Error('Could not like dog!');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    dislike() {
      fetch('api/v1/dogs/dislikes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.dogId,
        }),
      })
        .then((response) => {
          if (response.ok) {
            this.loadRandomDog();
          } else {
            throw new Error('Could not dislike dog!');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadRandomDog();
  },
};
</script>

<style scoped>
.dog-photo {
  height: 400px;
  width: auto;
  border: 1px darkgray solid;
  padding: 0;
}
</style>
