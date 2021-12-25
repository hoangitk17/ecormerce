import "./../../lang";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <h1>
      Home {t("welcome")}
      <p>{t("date_format_one", { date: new Date() })}</p>
      <p>{t("date_format_two", { date: new Date() })}</p>
    </h1>
  );
}
