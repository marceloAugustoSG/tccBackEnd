import Express from "express"

const app = Express()
const PORT = 3000
app.listen(PORT, () => {

    console.log(`Server is running in port ${PORT} 🔥`)

})

const usuario = {
    nome: "Marcelo Augusto Soares Gomes"
}
app.get("/", (req, res) => {

    res.json(usuario)
})