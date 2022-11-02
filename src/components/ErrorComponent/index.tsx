import React from "react";
import styles from "./styles.module.scss";

const ErrorComponent: React.FC = () => {
  return (
    <section className={ styles.content }>
      <h1> Sorry, we have error </h1>
      <div className={ styles.text }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore doloremque error est itaque quae voluptate? Consectetur cumque hic incidunt molestias, mollitia officia quae reiciendis sequi? Accusantium asperiores culpa dolores possimus tenetur ut, voluptatem. Dignissimos dolor minus quos reprehenderit soluta vero! Ad alias amet beatae dicta dolorum eveniet ex exercitationem facilis maiores natus nisi non nulla odit officia pariatur, placeat quaerat, quasi qui quod repudiandae sit tenetur unde? Accusamus commodi debitis dignissimos eos, laboriosam maiores nostrum numquam optio porro provident soluta suscipit, vel? Aliquid atque, commodi dignissimos dolore id labore magnam, necessitatibus nemo porro possimus quaerat quod sapiente similique ut.</div>
    </section>
  )
}

export default ErrorComponent;
