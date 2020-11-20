<template>
  <div class="queue-preview">
    <b-row>
      <b-col cols="8">
        <router-link :to="`/queue/${id}`">
          <img class="queue-preview-img" src="../assets/template.jpg" />
        </router-link>
      </b-col>
      <b-col cols="4">
        <b-row>
          {{ title }}
        </b-row>
        <b-row> Current track: {{ currentTrack }} </b-row>
        <b-row> Listeners: {{ listeners }} </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "QueuePreview",
  props: ["id", "title", "currentTrack", "listeners"],
  // data: () => {
  //   return {
  //     title: "Queue title",
  //     currentTrack: "Simple artist",
  //     listeners: 50,
  //   };
  // },
};
</script>

<style>
.queue-preview {
  margin: 10px 0 0 10px;
}
.queue-preview-img {
  width: 100%;
}
</style>
