

// 이벤트 캘린더 초기화
let inst = mobiscroll.eventcalendar('.vl-calendar', {
  themeVariant: 'light',
  clickToCreate: false,
  dragToCreate: false,
  dragToMove: false,
  dragToResize: false,
  eventDelete: false,
  locale: mobiscroll.localeKo, // 한글
  view: {
    calendar: {
      labels: true,
      popover: true,
      popoverClass: 'custom-event-popover'
    },
  },

  responsive: {
    xsmall: {
      view: {
        calendar: {
          type: 'month'
        },
        agenda: {
          type: 'day'
        }
      }
    },
    custom: { // Custom breakpoint
      breakpoint: 600,
      view: {
        calendar: {
          labels: true
        }
      }
    }

  },

  renderEventContent: function (data) {
    const dataObject = data.ariaLabel;
    // 시작 날짜 찾아주기
    const startmatch = dataObject.match(/시작: .*? (\d+월 \d+)/);

    // 끝 날짜 찾아주기
    const endmatch = dataObject.match(/종료: .*? (\d+월 \d+)/);

    const startDate = startmatch[1];
    const endDate = endmatch[1];

    if (startmatch && startDate != endDate) {
      return '<div class="mbsc-custum-box">' +
        '<div class="mbsc-tag">' +
        '<div class="mbsc-circle" style="background-color:' + data.color + '"></div>' +
        '<div class="mbsc-tit">' + data.title + '</div>' +
        '</div>' +
        '<div class="mbsc-event-time">' + startDate + '일 ~ ' + endDate + '일 </div>' +
        '</div>';
    } else if (startmatch && startDate == endDate) {
      return '<div class="mbsc-custum-box">' +
        '<div class="mbsc-tag">' +
        '<div class="mbsc-circle" style="background-color:' + data.color + '"></div>' +
        '<div class="mbsc-tit">' + data.title + '</div>' +
        '</div>' +
        '<div class="mbsc-event-time">' + startDate + '일</div>' +
        '</div>';
    } else {
      console.log("날짜를 찾을 수 없습니다.");
      return '';
    }
  },

  onLabelClick: function (event, inst) {
    if (event.domEvent.target.classList.contains('md-custom-event-btn')) {
      event.domEvent.stopPropagation();

    }
  },

  renderHeader: function () {
    return '<div mbsc-calendar-prev class="custom-prev"></div>' +
      '<div mbsc-calendar-nav class="custom-nav"></div>' +
      '<div mbsc-calendar-next class="custom-next"></div>';
  },

});




mobiscroll.getJson('../chap01/js/data.json', function (events) {
  inst.setEvents(events);
}, 'json');
