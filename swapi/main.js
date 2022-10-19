let resBtn = document.querySelector('button')
const baseUrl = "https://swapi.dev/api/"

function clickBtn () {
    axios.get(`${baseUrl}planets/?search=Alderaan`)
    .then((res) => {
        let alderaan = res.data.results[0]
        console.log(alderaan)
        for (let i = 0; i < alderaan.residents.length; i++) {
            axios.get(alderaan.residents[i])
        .then((res) => {
            let newText = document.createElement('h2')
            newText.textContent = res.data.name
            console.log(res.data.name)
            document.querySelector('.btn-container').appendChild(newText)
        })
        .catch((err) => console.log(err))
        }
    })
    .catch((err) => console.log(err))
}

resBtn.addEventListener('click', clickBtn)