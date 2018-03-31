module.exports = function render(ctx, r = 500, d = new Date()) {
	function line(ctx, pos, length, width) {
		ctx.beginPath()
		ctx.lineWidth = width
		ctx.lineCap = 'round'
		ctx.moveTo(0, 0)
		ctx.rotate(pos)
		ctx.lineTo(0, -length)
		ctx.stroke()
		ctx.rotate(-pos)
	}
	ctx.fillStyle = '#ffffff'
	ctx.translate(r, r)

	ctx.beginPath()
	ctx.arc(0, 0, r, 0, 2 * Math.PI)
	ctx.stroke()
	ctx.beginPath()
	ctx.arc(0, 0, r * 0.1, 0, 2 * Math.PI)
	ctx.fill()

	ctx.font = r * 0.15 + 'px arial'
	ctx.textBaseline = 'middle'
	ctx.textAlign = 'center'
	for (var num = 1; num <= 12; num++) {
		var ang = num * Math.PI / 6
		ctx.rotate(ang)
		ctx.translate(0, -r * 0.85)
		ctx.rotate(-ang)
		ctx.fillText(num.toString(), 0, 0)
		ctx.rotate(ang)
		ctx.translate(0, r * 0.85)
		ctx.rotate(-ang)
	}

	var h = d.getHours() % 12
	var m = d.getMinutes()
	var s = d.getSeconds()
	h = h * Math.PI / 6 + m * Math.PI / 6 / 60 + s * Math.PI / 360 / 60
	line(ctx, h, r * 0.5, r * 0.07)
	m = m * Math.PI / 30 + s * Math.PI / 30 / 60
	line(ctx, m, r * 0.8, r * 0.02)
	s = s * Math.PI / 30
	line(ctx, s, r * 0.9, r * 0.01)
}
