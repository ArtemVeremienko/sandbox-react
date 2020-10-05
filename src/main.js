class App {
  run = (name = 'World') => {
    console.log(`hello ${name}`)
  }
  constructor() {
  }
}

const app = new App()
app.run()