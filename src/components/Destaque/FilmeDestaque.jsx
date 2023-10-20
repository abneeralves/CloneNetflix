import React from 'react'
import './FilmeDestaque.css'

const FilmeDestaque = ({ item }) => {

  let genres = []
  for (let i in item.genres) {
    genres.push( item.genres[i].name)
  }

  return (
    <section className='destaque' style={{
      backgroundSize: 'cover', backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      
      <div className='ColorVertical'>
        <div className='ColorHorizontal'>
          <div>
            <div className='NomeDestaque'>{item.title}</div>
            <div className='InfoDestaque'>
              <div className='VotosDestaque'>{item.vote_average.toFixed(1)} pontos</div>
              <div className='AnosDestaque'>{item.release_date}</div>
            </div>
            <div className='DescricaoDestaque'>{item.overview}</div>
            <div className='BotoesDestaque'>
              <a href={`/watch/${item.id}`} className='Pbotao'>▶︎ Assistir</a>
              <a href={`/list/add/${item.id}`} className='Sbotao'>+ Minha Lista</a>
            </div>
            <div className='GenerosDestaque'><strong>Gêneros:</strong> {genres.join(', ')}</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FilmeDestaque