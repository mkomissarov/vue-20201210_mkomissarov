export const MeetupCover = {
  template: `<div class="meetup-cover" :style="\`--bg-url: url(\${image})\`">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,

  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
      default: 'Название митапа'
    }
  }
};
 