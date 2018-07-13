const Canvas = require('canvas')
const compression = require('compression')
const app = require('express')()
const renderClock = require('./clock')

app.use(compression())

app.get('*', (req, res) => {
	const r = (req.query.size || 1000) / 2
	const cvs = new Canvas(r * 2, r * 2)
	renderClock(cvs.getContext('2d'), r)
	res.set('Content-Type', 'image/png')
	cvs.pngStream().pipe(res)
})

const PORT = process.env.PORT || 7894

app.listen(PORT, () => console.log(`listen on http://localhost:${PORT}`))
