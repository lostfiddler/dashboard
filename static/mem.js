import formatBytes from './formatBytes.js'

const memory = {}

async function updateState() {
    const response = await fetch('/memory')
    const data_string = await response.text()
    const data_array = data_string.split(/\n/)

    for(let i = 0;i < data_array.length;i++){
        const data_pair = data_array[i].split(/:/)
        memory[data_pair[0]] = formatBytes(parseInt(data_pair[1]) * 1024)
    }
}

await updateState()

function calcUsed() {
    const GiB = 1_073_741_824
    return formatBytes((parseFloat(memory.MemTotal) - parseFloat(memory.MemAvailable)) * GiB)
}

export function display() {
    const memoryHTMLElement = document.querySelector('#memory')
    memoryHTMLElement.textContent = `Total: ${memory.MemTotal} Used: ${calcUsed()} Free: ${memory.MemFree}`
}
