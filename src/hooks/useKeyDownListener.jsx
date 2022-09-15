import useEventListener from './useEventListener';

const useKeyDownListener = (key, cb) => {
  useEventListener('keydown', (event) => {
    event.key === key && cb();
  });
};

export default useKeyDownListener;
