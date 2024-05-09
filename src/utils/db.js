const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cleiton:ww14qhcCiWr2Hj9Q@cluster0.xix06tm.mongodb.net/')
.then(
    () => {
        console.log('Deu certo')
    }
)
.catch(
    error => console.error('Nao deu certo')
)