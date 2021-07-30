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

export {
  toast,
  log
};