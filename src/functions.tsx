import { ToastAndroid } from 'react-native';

const log = (e: any) => {
  return console.log(e);
};

const toast = (e: string) => {
  ToastAndroid.showWithGravity(
    e,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
};

const capitalize = (e: string) => {
  return e[0].toUpperCase() + e.substring(1, e.length);
}

export {
  toast,
  log,
  capitalize
};
