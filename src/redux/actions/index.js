import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../utils/api";

export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  const res = await api.get("/getLanguages");

  return res.data.data.languages;
});

//* API' dan çeviri sonucu al
export const translateText = createAsyncThunk("translate/translateText", async (arg, { getState }) => {
  const { translate } = getState();

  //* API' a gönderilecek parametreleri ayarla
  const params = new URLSearchParams();
  params.set("source_language", translate.sourceLang.value);
  params.set("target_language", translate.targetLang.value);
  params.set("text", translate.textToTranslate);

  //* api' ye istek at
  const res = await api.post("translate", params);

  return res.data.data.translatedText;
});
