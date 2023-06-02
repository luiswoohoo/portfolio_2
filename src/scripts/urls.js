const prod = {
    url: 'https://luport.netlify.app/#projects-section',
}
const dev = {
    url: 'http://localhost:3000/',
}
export const config = import.meta.env.MODE === 'development' ? dev : prod
