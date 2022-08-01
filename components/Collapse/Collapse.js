import { useRef } from 'react'

function Collapse(props) {
  const { items = [] } = props
  const collapseRef = useRef([])

  const handleClick = (_index) => {
    const btn = collapseRef.current[_index]
    const content = btn.nextSibling

    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  }

  return (
    <div className="Collapse">
      {items.map((item, index) => {
        return (
          <div key={item.key}>
            <button
              className="Collapse__btn"
              onClick={() => handleClick(index)}
              ref={(el) => (collapseRef.current[index] = el)}
            >
              {item.question}
            </button>
            <div
              className="Collapse__content"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Collapse
