var app = new Vue({
  el: 'form',

  data: {
    auth: {
      user: null,
      email: '',
      password: '',
      message: '',
      userName: '',
      hasErrors: false
    }
  },

  computed: {
    isAuthenticated: function () {
      // This function changes the auth.user state when
      // the auth status of user changes.
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          this.auth.user = user
        } else {
          this.auth.user = null
        }
      }.bind(this));
      return (this.auth.user !== null)
    }
  },

  firebase: {
    items: items
  },

})

firebase.auth().onAuthStateChanged(function (user) {
  // DELETE ELSE STATEMENT WHEN YOU FIGURE THIS OUT
  if (firebase.auth().currentUser === null) {
    window.location.href = '/login'
  } else {
    alert('Hello')
  }
})
