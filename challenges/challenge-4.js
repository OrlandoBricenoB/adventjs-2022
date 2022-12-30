module.exports = boxes => (
  boxes.sort((a, b) => (b.l + b.w + b.h) - (a.l + a.w + a.h)).every((box, i) => {
    if (i === boxes.length - 1) return true
    const next = boxes[i + 1]
    return box.l > next.l && box.w > next.w && box.h > next.h
  })
)
