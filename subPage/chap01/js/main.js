// 이벤트 캘린더 초기화
let eventCalendarInst = mobiscroll.eventcalendar('.vl-calendar', {
  themeVariant: 'light',
  clickToCreate: false,
  dragToCreate: false,
  dragToMove: false,
  dragToResize: false,
  eventDelete: false,
  locale: mobiscroll.localeKo, // 한글
  view: {
    calendar: {
      count: true,
      labels: true,
    },
    agenda: { type: 'month' }
  },

  renderHeader: function () {
    return '<div mbsc-calendar-prev class="custom-prev"></div>' +
      '<div mbsc-calendar-nav class="custom-nav"></div>' +
      '<div mbsc-calendar-next class="custom-next"></div>';
  },

  onEventClick: function (event, inst) {
    mobiscroll.toast({
      message: event.event.title
    });
  },
});






mobiscroll.getJson('../chap01/js/data.json', function (events) {
  eventCalendarInst.setEvents(events);
}, 'json');