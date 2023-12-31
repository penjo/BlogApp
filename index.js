import "react-native-gesture-handler"
import { AppRegistry } from "react-native/types";
import App from"./App";
import {name as appName} from "./app.json";
if (__DEV__) {
    const ignoreWarns = ["VirtualizedLists should never be nested inside plain ScrollViews"];
  
    const errorWarn = global.console.error;
    global.console.error = (...arg) => {
      for (const error of ignoreWarns) {
        if (arg[0].startsWith(error)) {
          return;
        }
      }
      errorWarn(...arg);
    };
  }
AppRegistry.registerComponent(appName, () => App);