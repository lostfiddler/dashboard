const ports = []

const response = await fetch('/ports')
const data = await response.text()

const data_array = data.split(/\n/).slice(1, -2)

for(let i = 0;i < data_array.length;i++) {
    const data_trio = data_array[i].split(/\s/).filter((item) => item.length > 1)
    const foo = {
        port: data_trio[0],
        state: data_trio[1],
        service: data_trio[2]
    }
    ports.push(foo)
}
console.log(ports)
