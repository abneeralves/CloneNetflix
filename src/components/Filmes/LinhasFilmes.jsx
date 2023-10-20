import React from "react"
import './LinhasFilmes.css'


const LinhasFilmes = ({ title, items }) => {
  return (
    <div className="linhaFilmes">
      <h2>{title}</h2>

      <div className="areaLista">
        <div className="areaLinha">
          {items.results.length > 0 && items.results.map((item, key) => 
            <div key={key} className="itemArea"> 
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
            </div> 
          )}
        </div>

      </div>
    </div>
  )
}

export default LinhasFilmes