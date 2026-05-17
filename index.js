import connectToWhatsapp from 'import "./Digix/crew.js"
import handleIncomingMessage from './events/messageHandler.js'

(async() => {
    await connectToWhatsapp(handleIncomingMessage)
        console.log('established !')
})()
