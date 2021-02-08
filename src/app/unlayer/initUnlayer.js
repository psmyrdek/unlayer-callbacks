const UNLAYER_SRC = 'https://editor.unlayer.com/embed.js'

export default function initUnlayer() {
    return new Promise((resolve) => {
        const scriptElement = document.createElement('script')
        scriptElement.src = UNLAYER_SRC

        scriptElement.addEventListener('load', () => {
            resolve(window.unlayer)
        })

        document.body.appendChild(scriptElement)
    })
}
