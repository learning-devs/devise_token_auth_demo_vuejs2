export default {
  alert: {
    title: 'Ups...',
    content: 'Algo salió mal.'
  },
  openDialog(ref, context, title, content) {
    this.alert.title = title
    this.alert.content = content
    context.$refs[ref].open();
  },
  closeDialog(ref) {
    this.$refs[ref].close();
  }
}
