import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { AdvancedSearchParamsSelector, changeCompany } from "@/store/slices/AdvancedSearch";
import { CompaniesOptions } from "@/services/AdvancedSearch/CompaniesOptions";
import styles from "./styles.module.scss";

type myKeyType = keyof typeof CompaniesOptions;
const CompaniesKeys: myKeyType[] = Object.keys(CompaniesOptions) as myKeyType[];

const ChooseCompanyComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const toggleCompany = (companyName: myKeyType) => dispatch(changeCompany(companyName));

  const { company: SelectedCompanies } = useAppSelector(AdvancedSearchParamsSelector);
  const isSelectedCompany = (company: myKeyType) => SelectedCompanies.includes(company);
  return (
    <form className={ styles.form }>
      {
        CompaniesKeys.map(companyName => {
          return (
            <label onChange={ () => toggleCompany(companyName) } key={ companyName }>
              <input defaultChecked={ isSelectedCompany(companyName) } className={ styles.checkbox } type="checkbox"/>
              <span className={ styles.span }> { CompaniesOptions[companyName] } </span>
            </label>
          )
        })
      }
    </form>
  )
}

export default ChooseCompanyComponent;
