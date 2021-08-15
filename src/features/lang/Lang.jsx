import { useSelector } from "react-redux"
import { selectLangIds } from "../../app/selectors"
import { useTranslation } from "react-i18next";


const Lang = () => {

  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)

    // i18n.changeLanguage stores 'lgn' value in localStorage
    // The selected option field should also be stored

  };

  const langs = useSelector(selectLangIds)

  const options = langs.map( (lang, index) => (
    <option key={index} value={lang}>{lang}</option>
  ))

  return (
    <div>
      <select className={`
        form-select form-select-sm
        rounded-pill
        border-dark
        bg-dark
        text-light
        `} aria-label="lang select"
        onChange={changeLanguage}
      >
        {options}
      </select>
    </div>
  )
}

export default Lang

// https://medium.com/@smeyradvrn/support-multi-language-with-react-i18next-in-create-react-app-e10d2fafd36e
// https://react.i18next.com/getting-started