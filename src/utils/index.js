const common = {
    formatDate: (time) => {
        if (!time) {
            return '00:00'
        }
        const number = Math.floor(time)
        const minutes = ('0' + Math.floor(number / 60)).slice(-2)
        const seconds = ('0' + (number - Math.floor(number / 60) * 60)).slice(-2)

        return `${minutes}:${seconds}`
    },
}

export default common
