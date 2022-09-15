import { useRef, useEffect } from 'react';

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [ handler ]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;

    if (!isSupported) return undefined;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [ eventName, element ]);
}

export default useEventListener;
