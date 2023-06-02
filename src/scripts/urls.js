const prod = {
    url: 'https://luport.netlify.app/',
}
const dev = {
    url: 'http://localhost:3000/',
}
export const config = import.meta.env.MODE === 'development' ? dev : prod
