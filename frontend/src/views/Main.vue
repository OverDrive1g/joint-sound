<template>
  <div class="home">
    <div>
      <b-container>
        <QueuePreview
          v-for="queue in queues"
          :key="queue.di"
          :id="queue.id"
          :title="queue.title"  
          :currentTrack="queue.currentTrack"
          :listeners="queue.listeners"

        />
      </b-container>
    </div>
  </div>
</template>

<script>
import QueuePreview from "@/components/QueuePreview.vue";

export default {
  name: "Home",
  components: { QueuePreview },
  data: () => {
    return {
      queues: [
        { id: "1", title: "Title 1", currentTrack: "Track 1", listeners: 102 },
        { id: "2", title: "Title 2", currentTrack: "Track 2", listeners: 103 },
        { id: "3", title: "Title 3", currentTrack: "Track 3", listeners: 14 },
        { id: "4", title: "Title 4", currentTrack: "Track 4", listeners: 110 },
        { id: "5", title: "Title 5", currentTrack: "Track 5", listeners: 10 },
        { id: "6", title: "Title 6", currentTrack: "Track 6", listeners: 5 },
        { id: "7", title: "Title 7", currentTrack: "Track 7", listeners: 12 },
        { id: "8", title: "Title 8", currentTrack: "Track 8", listeners: 25 },
        { id: "9", title: "Title 9", currentTrack: "Track 9", listeners: 73 },
      ],
    };
  },
};
</script>
