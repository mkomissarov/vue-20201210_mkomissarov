import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div class="meetup-agenda">
      <div class="meetup-agenda__item" v-for="item in agenda"><meetup-agenda-item :item="item"></meetup-agenda-item></div>
    </div>`,

  // components
  components: {
    MeetupAgendaItem,
  },

  // props
  props: {
    agenda: {
      type: Array,
    },
  },
};

