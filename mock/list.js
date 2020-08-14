
const info=[
  {exam:'5555'},
  {exam:'77777'},
  {exam:'66666'},
  {exam:'5555'}
]
module.exports = [
  // get user info
  {
    url: '/vue-element-admin/list/update',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: info
      }
    }
  }


]
