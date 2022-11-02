import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import ClassNames from "@/libs/ClassNames";

interface IProps {
  name: string,
  path: string
}

const HeaderCategoryLinkComponent: React.FC<IProps> = ({ name, path }) => {
  const { pathname } = useRouter();
  const isActive = pathname === path ? styles.active : "";
  return (
    <Link className={ styles.link } href={ path }><a className={ ClassNames(styles.href, isActive) }>{ name }</a></Link>
  )
}

export default HeaderCategoryLinkComponent;
