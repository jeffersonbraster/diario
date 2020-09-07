const moment = require('moment')

module.exports = {
    formatDate: function(date, format) {
        return moment(date).locale('pt').format(format)
    },
}