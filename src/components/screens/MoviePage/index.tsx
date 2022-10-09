import React from "react";
import Image from "next/image";
import carouselItemIng from "@/images/img/Rectangle_8.png";
import RightSidebarComponent from "@/components/RightSidebar";
import ClassNames from "@/libs/ClassNames";
import styles from "./styles.module.scss";

const MoviePageComponent: React.FC = () => {
  return (
    <main className={ ClassNames(styles.body, "container") }>
      <div className={ styles.center }>
        <section className={ styles.header }>
          <div className={ styles.title }>Главная / Подборки / <span>Лучшие фильмы всех времен</span></div>
          <div className={ styles.slider }>
            <div className={ styles.text_slider }>Лучшие фильмы всех времен</div>
          </div>
        </section>
        <div className={ styles.text }>Мы собрали для Вас подборку лучших фильмов по теме "название подборки" с рейтингом от "минимальный рейтинг фильмов из подборки" и до "максимальный рейтинг фильмов из подборки". В неё вошли фильмы следующих жанров: "жанр1"("число раз"), "жанр2"(число раз), "жанр3"("число раз"). Самый новый фильм - "год" года, самый старый фильм - "год" года. Продолжительность фильмов от "минимальная продолжительность" до "максимальная продолжительность". Выбирайте фильм и приятного просмотра!</div>
        <div className={ styles.selections }>
          <section className={ styles.selection }>
            <div className={ styles.title }>Лучшие фильмы подборки</div>
            <div className={ styles.selection_carousel }>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
            </div>
            <div className={ styles.selection_carousel }>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
              <div className={ styles.item }>
                <Image src={ carouselItemIng } />
                <div className={ styles.title }>Механик</div>
                <div className={ styles.subtitle }>2020, Драма, США</div>
              </div>
            </div>
          </section>
        </div>
        <div className={ styles.about }>
          <section>
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
          <section>
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
        </div>
      </div>
      <RightSidebarComponent />
    </main>
  )
}

export default MoviePageComponent;
