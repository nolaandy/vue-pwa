import Vue from 'vue'

const event = {
  bus: null,

  init () {
    if (!this.bus) {
      this.bus = new Vue()
    }

    return this
  },

  destroy () {
    if (this.bus) {
      this.bus.$destroy()
    }
  },

  emit (name, ...args) {
    this.bus.$emit(name, ...args)
    return this
  },

  on () {
    if (arguments.length === 2) {
      this.bus.$on(arguments[0], arguments[1])
    } else {
      Object.keys(arguments[0]).forEach(key => {
        this.bus.$on(key, arguments[0][key])
      })
    }

    return this
  }
}

const eventHub = event.init()
export { eventHub }
