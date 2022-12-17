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

    enroll: {
      path: '/places/enroll'
    }
  },

  admin: {
    path: '/admin'
  }
}

export default routes
