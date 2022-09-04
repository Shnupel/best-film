import type { NextPage } from 'next'
import Image from "next/image";
import logoImage from "../public/images/svg/Logo.svg";
import rightMenuCart from "../public/images/img/Rectangle_7.png";
import carouselImg from "../public/images/img/Rectangle_6.png"
import carouselItemIng from "../public/images/img/Rectangle_8.png";

const Home: NextPage = () => {
  return (
    <div className="wrapper bg-black z-10">
      <header className="header bg-darkGrey container py-[30px] flex items-center content-between justify-between">
        <Image src={ logoImage } className="w-[157px] h-[94px]" />
        <nav></nav>
        <input type="text" placeholder="Поиск по сайту" className="bg-darkBlue input px-[30px] py-[22px] rounded-2xl text-white w-[720px]" />
      </header>
      <main className="body container flex items-start">
        <div className="center w-[74%] mr-[30px]">
          <section className="header">
            <div className="title">Главная / Подборки / <span>Лучшие фильмы всех времен</span></div>
            <div className="slider">
              <div className="text-slider">Лучшие фильмы всех времен</div>
            </div>
          </section>
          <div className="text">Мы собрали для Вас подборку лучших фильмов по теме "название подборки" с рейтингом от "минимальный рейтинг фильмов из подборки" и до "максимальный рейтинг фильмов из подборки". В неё вошли фильмы следующих жанров: "жанр1"("число раз"), "жанр2"(число раз), "жанр3"("число раз"). Самый новый фильм - "год" года, самый старый фильм - "год" года. Продолжительность фильмов от "минимальная продолжительность" до "максимальная продолжительность". Выбирайте фильм и приятного просмотра!</div>
          <div className="selections">
            <section className="selection">
              <div className="title">Лучшие фильмы подборки</div>
              <div className="selection-carousel flex items-center">
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
              </div>
            </section>
            <section className="selection">
              <div className="title">Лучшие фильмы подборки</div>
              <div className="selection-carousel flex items-center">
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
                <div className="item relative">
                  <Image src={ carouselItemIng } />
                  <div className="title">Механик</div>
                  <div className="subtitle">2020, Драма, США</div>
                </div>
              </div>
            </section>
          </div>
          <div className="about">
            <section>
              <div className="image-block">
                <div className="image">
                  <Image src={ carouselItemIng } sizes="( min-width: 100% ) " />
                </div>
                <div className="ratings">
                  <div className="rating">
                    <div className="title">8.9</div>
                    <div className="name">Кинопоиск</div>
                  </div>
                  <div className="rating">
                    <div className="title">8.9</div>
                    <div className="name">Кинопоиск</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="title">Гениальное ограбление (2021)</div>
                <div className="subtitle">Way Down</div>
                <div className="some-info">
                  <div className="element">
                    <div className="title">Продолжительность</div>
                    <div className="text">1 Час 58 минут</div>
                  </div>
                  <div className="element">
                    <div className="title">Год выпуска</div>
                    <div className="text">2021</div>
                  </div>
                  <div className="element">
                    <div className="title">Премьера фильма в России</div>
                    <div className="text">22 Апреля 2021</div>
                  </div>
                  <div className="element">
                    <div className="title">Возраст</div>
                    <div className="text">16+</div>
                  </div>
                </div>
                <div className="many-info">
                  <div className="line">
                    <div className="title">Жанр</div>
                    <div className="text">Боевик, Комедия, Драма</div>
                  </div>
                  <div className="line">
                    <div className="title">Страна</div>
                    <div className="text">США</div>
                  </div>
                  <div className="line">
                    <div className="title">В главных ролях</div>
                    <div className="text">Адам Уэст, Берт Уорд, Уильям Шетнер</div>
                  </div>
                  <div className="line">
                    <div className="title">Участвует в подборках</div>
                    <div className="text">2021 Нетфликс Вестерны Аниме Лучшие фильмы 2021</div>
                  </div>
                </div>
                <div className="about-film">
                  <div className="title">О чем фильм “Гениальное ограбление (2021)”</div>
                  <div className="text">
                    <div className="paragraph">Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.</div>
                    <div className="paragraph">Постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.</div>
                    <div className="paragraph">Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений.</div>
                    <div className="more">Еще</div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="image-block">
                <div className="image">
                  <Image src={ carouselItemIng } sizes="( min-width: 100% ) " />
                </div>
                <div className="ratings">
                  <div className="rating">
                    <div className="title">8.9</div>
                    <div className="name">Кинопоиск</div>
                  </div>
                  <div className="rating">
                    <div className="title">8.9</div>
                    <div className="name">Кинопоиск</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="title">Гениальное ограбление (2021)</div>
                <div className="subtitle">Way Down</div>
                <div className="some-info">
                  <div className="element">
                    <div className="title">Продолжительность</div>
                    <div className="text">1 Час 58 минут</div>
                  </div>
                  <div className="element">
                    <div className="title">Год выпуска</div>
                    <div className="text">2021</div>
                  </div>
                  <div className="element">
                    <div className="title">Премьера фильма в России</div>
                    <div className="text">22 Апреля 2021</div>
                  </div>
                  <div className="element">
                    <div className="title">Возраст</div>
                    <div className="text">16+</div>
                  </div>
                </div>
                <div className="many-info">
                  <div className="line">
                    <div className="title">Жанр</div>
                    <div className="text">Боевик, Комедия, Драма</div>
                  </div>
                  <div className="line">
                    <div className="title">Страна</div>
                    <div className="text">США</div>
                  </div>
                  <div className="line">
                    <div className="title">В главных ролях</div>
                    <div className="text">Адам Уэст, Берт Уорд, Уильям Шетнер</div>
                  </div>
                  <div className="line">
                    <div className="title">Участвует в подборках</div>
                    <div className="text">2021 Нетфликс Вестерны Аниме Лучшие фильмы 2021</div>
                  </div>
                </div>
                <div className="about-film">
                  <div className="title">О чем фильм “Гениальное ограбление (2021)”</div>
                  <div className="text">
                    <div className="paragraph">Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.</div>
                    <div className="paragraph">Постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.</div>
                    <div className="paragraph">Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений.</div>
                    <div className="more">Еще</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="right-menu">
          <div className="carts">
            <div className="title"> Похожие коллекции </div>
            <div className="cart flex content-between items-start">
              <Image src={ rightMenuCart } className="w-auto h-[100%] mr-[15px] image" alt=""/>
              <div className="content">
                <div className="time">2 недели назад</div>
                <div className="text">Задача организации, в особенности же новая формировании.</div>
              </div>
            </div>
            <div className="cart flex content-between items-start">
              <Image src={ rightMenuCart } className="w-auto h-[100%] mr-[15px] image" alt=""/>
              <div className="content">
                <div className="time">2 недели назад</div>
                <div className="text">Задача организации, в особенности же новая формировании.</div>
              </div>
            </div>
            <div className="cart flex content-between items-start">
              <Image src={ rightMenuCart } className="w-auto h-[100%] mr-[15px] image" alt=""/>
              <div className="content">
                <div className="time">2 недели назад</div>
                <div className="text">Задача организации, в особенности же новая формировании.</div>
              </div>
            </div>
            <div className="cart flex content-between items-start">
              <Image src={ rightMenuCart } className="w-auto h-[100%] mr-[15px] image" alt=""/>
              <div className="content">
                <div className="time">2 недели назад</div>
                <div className="text">Задача организации, в особенности же новая формировании.</div>
              </div>
            </div>
            <div className="cart flex content-between items-start">
              <Image src={ rightMenuCart } className="w-auto h-[100%] mr-[15px] image" alt=""/>
              <div className="content">
                <div className="time">2 недели назад</div>
                <div className="text">Задача организации, в особенности же новая формировании.</div>
              </div>
            </div>
          </div>
          <div className="carousel">
            <div className="title">популярные коллекции</div>
            <div className="carousel-item">
              <Image src={ carouselImg } className="img" />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer bg-darkGrey">
        <div className="container">
          <Image src={ logoImage } className="logo mr-[170px] h-[290px] w-auto" />
          <div className="categories">
            <div className="title">Меню</div>
            <div className="category">Подборки</div>
            <div className="category">По жанру</div>
            <div className="category">Фильмы</div>
            <div className="category active">Сериалы</div>
            <div className="category">Мультфильмы</div>
            <div className="category">Аниме</div>
            <div className="category">Актеры</div>
          </div>
          <div className="about">
            <div className="title">О нас</div>
            <div className="items">Зная всё о кино, хочется поделиться этим с другими. Делитесь фильмами, трейлерами, персонами и новостями в социальных сетях, присваивайте рейтинги фильмам и обсуждайте их с друзьями и подписчиками!<br/>Интересные фильмы, ближайшие кинотеатры и любимых актеров можно добавлять в «Избранное». Система покажет все связанные с ними новости и новые трейлеры, подскажет, когда можно купить билет в кино на интересующую премьеру. Присоединяйтесь!</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;
