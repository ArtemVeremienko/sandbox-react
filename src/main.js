class App {
  run = async (name = 'World') => {
    console.log(`hello ${name}`)
  }
  constructor() {
  }
}

const app = new App()
app.run()
  .then(() => console.log('done'))
  .catch(() => console.log('error'))