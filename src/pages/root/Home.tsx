import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  return <h1 className="flex-center text-4xl mt-40 mb-5">{t("greeting")}</h1>;
};

export default Home;
