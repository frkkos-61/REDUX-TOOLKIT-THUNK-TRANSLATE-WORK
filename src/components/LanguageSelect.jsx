import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { changeLangs, setSource, setTarget } from "../redux/slices/translateSlice";
import { useMemo } from "react";
import { translateText } from "../redux/actions";

const LanguageSelect = () => {
  const { isLoading, languages } = useSelector((store) => store.language);
  const { sourceLang, targetLang } = useSelector((store) => store.translate);
  const dispatch = useDispatch();

  //! react select kütüphanesinin istediği veri formatı value,label değerlerini code > value , name > label' a çevirmeliyiz. Diziyi dönüp yeni bir diziyi sadece map methodu ile yapabiliriz.

  //* Her render sırasında gereksiz hesaplama yapmamak için useMemo kullandık

  const formatted = useMemo(
    () =>
      languages.map((item) => ({
        value: item.code,
        label: item.name,
      })),
    [languages]
  );

  return (
    <div className="flex gap-2 text-black">
      <Select
        value={sourceLang}
        options={formatted}
        isLoading={isLoading}
        isDisabled={isLoading}
        onChange={(selected) => dispatch(setSource(selected))}
        className="flex-1"
      />

      <button
        onClick={() => dispatch(changeLangs())}
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800  transition rounded text-white cursor-pointer"
      >
        Değiş
      </button>

      <Select
        value={targetLang}
        options={formatted}
        isLoading={isLoading}
        isDisabled={isLoading}
        onChange={(selected) => {
          dispatch(setTarget(selected));
          dispatch(translateText());
        }}
        className="flex-1"
      />
    </div>
  );
};

export default LanguageSelect;
