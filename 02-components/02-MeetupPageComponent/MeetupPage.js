import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';


export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div><meetup-view :meetup="meetup"></meetup-view></div>`,

  // components

  data: {
    meetup: null,
  },

  async mounted() {
    this.meetup = await fetchMeetup();
  },
};
