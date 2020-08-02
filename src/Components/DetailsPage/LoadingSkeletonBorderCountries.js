import React from "react";
import Skeleton from "react-loading-skeleton";
export default function LoadingSkeletonBorderCountries() {
    return (
        <span className="border-countries-loading-skeleton">
            <Skeleton width={100} height={20} />{" "}
            <Skeleton width={100} height={20} />{" "}
            <Skeleton width={100} height={20} />{" "}
            <Skeleton width={100} height={20} />
        </span>
    );
}
