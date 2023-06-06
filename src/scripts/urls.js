const prod = {
    url: 'https://luisaguinaga.dev/',
}
const dev = {
    url: 'http://localhost:3000/',
}
export const config = import.meta.env.MODE === 'development' ? dev : prod
