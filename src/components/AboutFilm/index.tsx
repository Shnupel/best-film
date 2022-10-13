import React from "react";
import { RatingColors } from "@/libs/RatingColors";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SearchFilmWithFullInfoType } from "@/types/SearchTypes/SearchFilmWithFullInfo.type";

interface IProps {
  data: SearchFilmWithFullInfoType
}

const AboutFilmComponent: React.FC<IProps> = ({ data }) => {
  return (
    <section className={ styles.about }>
      <div className={ styles.image_block }>
        <div className="image">
          <Image src={ data.image } layout={ "responsive" } width={ 100 } height={ 100 } sizes="( min-height: 641px ) " />
        </div>
        <div className={ styles.ratings }>
          <div style={{ border: `4px solid ${ RatingColors(8.9) }` }} className={ styles.rating }>
            <div className={ styles.title }>8.9</div>
            <div className={ styles.name }>Кинопоиск</div>
          </div>
          <div className={ styles.rating }>
            <div className={ styles.title }>8.9</div>
            <div className={ styles.name }>Кинопоиск</div>
          </div>
        </div>
      </div>
      <div className={ styles.content }>
        <div className={ styles.title }> { data.title } { data.year && (<span> ({ data.year }) </span>) }</div>
        <div className={ styles.subtitle }> { data.title } </div>
        <div className={ styles.some_info }>
          <div className={ styles.element }>
            <div className={ styles.title }>Продолжительность</div>
            {/*<div className={ styles.text }>1 Час 58 минут</div>*/}
            <div className={ styles.text }> { data.runtimeStr } </div>
          </div>
          <div className={ styles.element }>
            <div className={ styles.title }>Год выпуска</div>
            <div className={ styles.text }> { data.year } </div>
          </div>
          <div className={ styles.element }>
            <div className={ styles.title }>Премьера фильма в России</div>
            <div className={ styles.text }>22 Апреля 2021</div>
          </div>
          <div className={ styles.element }>
            <div className={ styles.title }>Возраст</div>
            <div className={ styles.text }> { data.description } </div>
          </div>
        </div>
        <div className={ styles.many_info }>
          <div className={ styles.line }>
            <div className={ styles.title }>Жанр</div>
            <div className={ styles.text }> { data.genres } </div>
          </div>
          <div className={ styles.line }>
            <div className={ styles.title }>Страна</div>
            <div className={ styles.text }> { data.countries } </div>
          </div>
          <div className={ styles.line }>
            <div className={ styles.title }>В главных ролях</div>
            <div className={ styles.text }> { data.actorList.slice(0, 5).map(({ id, name }) => <span key={ id } > { name } </span>) } </div>
          </div>
          <div className={ styles.line }>
            <div className={ styles.title }>Участвует в подборках</div>
            <div className={ styles.text }> { data.awards } </div>
          </div>
        </div>
        {
          data.description && (
            <div className={ styles.about_film }>
              <div className={ styles.title }>О чем фильм “Гениальное ограбление (2021)”</div>
              <div className={ styles.text }>
                <div className={ styles.paragraph }> { data.description } </div>
                {/*<div className={ styles.paragraph }>Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.</div>*/}
                {/*<div className={ styles.paragraph }>Постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.</div>*/}
                {/*<div className={ styles.paragraph }>Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений.</div>*/}
                <div className={ styles.more }>Еще</div>
              </div>
            </div>
          )
        }

      </div>
    </section>
  )
}

export default AboutFilmComponent;
