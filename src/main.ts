import { App } from "./app"


//iniciando o servidor
new App().serve.listen(3000, () => console.log("teste"))
