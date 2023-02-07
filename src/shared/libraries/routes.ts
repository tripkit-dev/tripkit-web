const routes = {
  main: {
    path: '/'
  },

  mypage: {
    path: '/mypage',
    travelDestination: {
      path: '/mypage/travel-destination'
    }
  },

  places: {
    path: '/places',

    place: {
      path: '/places/[id]'
    },

    enroll: {
      path: '/places/enroll'
    }
  },

  admin: {
    path: '/admin'
  },

  plan: {
    path: '/plan',

    guide: {
      path: '/plan/guide'
    },
    waiting: {
      path: '/plan/waiting'
    },
    list: {
      path: '/plan/list'
    }
  }
}

export default routes
