import Vue from 'vue';

const EventBus = new Vue();

export default EventBus;

// EventBus.$emit('i-got-clicked', this.clickCount);

// EventBus.$on('i-got-clicked', clickCount => {
//     console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
// });
