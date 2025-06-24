import React, { Suspense, useRef, ReactNode } from "react";
import Loader from "@/app/loading";
import useFirstViewportEntry from "@/app/components/useFirstViewportEntry";

const RenderOnViewportEntry = ({
    children,
    threshold = 0,
    root = null,
    rootMargin = "0px 0px 0px 0px",
    ...wrapperDivProps
}: {
    children: ReactNode;  // Properly typed here
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });

    return (
        <div {...wrapperDivProps} ref={ref}>
            {entered && (
                <Suspense fallback={<Loader />}>
                    {children}
                </Suspense>
            )}
        </div>
    );
};

export default RenderOnViewportEntry;