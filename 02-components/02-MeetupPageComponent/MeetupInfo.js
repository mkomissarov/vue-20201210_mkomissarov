export const MeetupInfo = {
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="2020-01-01">{{meetupDate}}</time>
      </li>
    </ul>`,

  // props
  props: ['place', 'date', 'organizer'],

  // computed
  computed: {
    meetupDate() {
      return new Date(this.date).toLocaleDateString(
        navigator.language,
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        },
      );
    },
  },
};
