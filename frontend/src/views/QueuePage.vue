<template>
  <b-container fluid>
    <div class="queue-page">
      <b-row>
        <b-col cols="8">
          <img class="player" src="../assets/template.jpg" />
          <b-row>
            <b-col class="current-track-title" cols="10">{{
              currentTrack.trackTitle + ' ' + $route.params.id
            }}</b-col>
            <b-col cols="2">{{ currentTrack.duration }}</b-col>
          </b-row>
          <div class="tracks-in-queue">
            <b-row class="track-in-queue" v-for="track in tracksInQueue" :key="track.id">
              <b-col class="current-track-title" cols="10">{{
              track.trackTitle
            }}</b-col>
            <b-col cols="2">{{ track.duration }}</b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="4">
          чат
        </b-col>
      </b-row>

    </div>
  </b-container>
</template>

<script>
export default {
  name: "QueuePage",
  data: () => {
    return {
      currentTrack: {
        trackTitle: "Current track",
        start: 1605913913,
        duration: "2:15",
      },
      tracksInQueue: [
        { id:'1', trackTitle: "track 1", duration: "3:43" },
        { id:'2', trackTitle: "track 2", duration: "3:43" },
        { id:'3', trackTitle: "track 3", duration: "3:43" },
        { id:'4', trackTitle: "track 4", duration: "3:43" },
        { id:'5', trackTitle: "track 5", duration: "3:43" },
      ],
    };
  },
};
</script>

<style>
.queue-page {
}
.player {
  width: 100%;
}
.current-track-title {
  text-align: left;
}

.tracks-in-queue{
  margin: 10px 0 0 10px;
}
.track-in-queue{
  margin: 10px 0 0 10px;
}

</style>
