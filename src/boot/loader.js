import { boot } from "quasar/wrappers";
import loaded from "./Data/index";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.config.globalProperties.$loaded = loaded;
});
