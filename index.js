const Canvas = require('canvas')
const app = require('express')()
const renderClock = require('./clock')

app.get('/clock.png', (req, res) => {
	const r = (req.query.size || 1000) / 2
	const cvs = new Canvas(r * 2, r * 2)
	renderClock(cvs.getContext('2d'), r)
	res.set('Content-Type', 'image/png')
	res.send(cvs.toBuffer())
})

app.listen(7894, () => console.log(`listen on http://localhost:7894`))
