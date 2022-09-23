import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import carouselItemIng from "public/images/img/Rectangle_8.png";

const AboutFilmComponent: React.FC = () => {
  return (
    <section className={ styles.about }>
      <div className={ styles.image_block }>
        <div className="image">
          <Image src={ carouselItemIng } sizes="( min-width: 100% ) " />
        </div>
        <div className={ styles.ratings }>
          <div className={ styles.rating }>
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
        <div className={ styles.title }>Гениальное ограбление (2021)</div>
        <div className={ styles.subtitle }>Way Down</div>
        <div className={ styles.some_info }>
          <div className={ styles.element }>
            <div className={ styles.title }>Продолжительность</div>
            <div className={ styles.text }>1 Час 58 минут</div>
          </div>
          <div className={ styles.element }>
            <div className={ styles.title }>Год выпуска</div>
            <div className={ styles.text }>2021</div>
          </div>
          <div className={ styles.element }>
            <div className={ styles.title }>Премьера фильма в России</div>
            <div className={ styles.text }>22 Апреля 2021</div>
          </div>
          <div className={ styles.element }>
            <div className={ styles.title }>Возраст</div>
            <div className={ styles.text }>16+</div>
          </div>
        </div>
        <div className={ styles.many_info }>
          <div className={ styles.line }>
            <div className={ styles.title }>Жанр</div>
            <div className={ styles.text }>Боевик, Комедия, Драма</div>
          </div>
          <div className={ styles.line }>
            <div className={ styles.title }>Страна</div>
            <div className={ styles.text }>США</div>
          </div>
          <div className={ styles.line }>
            <div className={ styles.title }>В главных ролях</div>
            <div className={ styles.text }>Адам Уэст, Берт Уорд, Уильям Шетнер</div>
          </div>
          <div className={ styles.line }>
            <div className={ styles.title }>Участвует в подборках</div>
            <div className={ styles.text }>2021 Нетфликс Вестерны Аниме Лучшие фильмы 2021</div>
          </div>
        </div>
        <div className={ styles.about_film }>
          <div className={ styles.title }>О чем фильм “Гениальное ограбление (2021)”</div>
          <div className={ styles.text }>
            <div className={ styles.paragraph }>Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.</div>
            <div className={ styles.paragraph }>Постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.</div>
            <div className={ styles.paragraph }>Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений.</div>
            <div className={ styles.more }>Еще</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFilmComponent;
