import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { AvailableLanguages, changeLanguage } from "@/lib/i18n";
import { GrLanguage } from "react-icons/gr";
import { Button } from "@/components/UI/Button";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button
        as={Button}
        className="rounded-full inline-flex items-center gap-2"
      >
        {i18n.resolvedLanguage.toUpperCase()}
        <div className="h-4 w-px bg-gray-300"></div>
        <GrLanguage className="text-lg" />
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {AvailableLanguages.map((lang) => (
              <Menu.Item key={lang.code}>
                {({ active }) => (
                  <button
                    onClick={changeLanguage.bind(null, lang.code)}
                    className={`${
                      active
                        ? "bg-primary bg-opacity-50 text-white"
                        : "text-gray-900"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                  >
                    {lang.nativeName}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSelector;
