import { agendaItemTitles, agendaItemIcons } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
  <div class="meetup-agenda__item-col">
  <img class="icon" alt="icon" :src="\`/assets/icons/icon-\${itemIcon}.svg\`" />
      </div>
      <div class="meetup-agenda__item-col">{{item.startsAt}} - {{item.endsAt}}</div>
      <div class="meetup-agenda__item-col">
      <h5 class="meetup-agenda__title">{{ item.title ? item.title : itemTitle }}</h5>
      <p v-if="item.speaker && item.language">
      <span>{{item.speaker}}</span>
      <span class="meetup-agenda__dot"></span>
      <span class="meetup-agenda__lang">{{item.language}}</span>
      </p>
      <p>{{item.description}}</p>
      </div>
      </div>`,

  // props
  props: {
    item: {
      type: Object,
    },
  },

  computed: {
    itemTitle() {
      return agendaItemTitles[this.item.type];
    },
    itemIcon() {
      return agendaItemIcons[this.item.type];
    },
  },
};
