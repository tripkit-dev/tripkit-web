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
  }
}

export default routes
