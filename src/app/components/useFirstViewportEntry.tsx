import { useEffect, useRef, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useFirstViewportEntry = (
  ref: React.RefObject<Element | null>,
  observerOptions?: IntersectionObserverOptions
): boolean => {
    const [entered, setEntered] = useState(false);
    const observer = useRef(
        new IntersectionObserver(
            ([entry]) => setEntered(entry.isIntersecting),
            observerOptions
        )
    );

    useEffect(() => {
        const element = ref.current;
        const ob = observer.current;

        if(entered) {
            ob.disconnect();
            return;
        }

        if (element && !entered) ob.observe(element);

        return () => ob.disconnect();
    }, [entered, ref]);

    return entered;
};

export default useFirstViewportEntry;