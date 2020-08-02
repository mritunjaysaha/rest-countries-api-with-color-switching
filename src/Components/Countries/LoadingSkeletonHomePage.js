import React from "react";
import Skeleton from "react-loading-skeleton";

export default function LoadingSkeletonHomePage() {
    return (
        <div className="loading-container cards-container">
            <div className="cards cards-1">
                <Skeleton className="flag" width={300} height={200} />
                <div className="cards-contents">
                    <Skeleton className="name" width={150} height={30} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                </div>
            </div>
            <div className="cards cards-2">
                <Skeleton className="flag" width={300} height={200} />
                <div className="cards-contents">
                    <Skeleton className="name" width={150} height={30} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                </div>
            </div>
            <div className="cards cards-3">
                <Skeleton className="flag" width={300} height={200} />
                <div className="cards-contents">
                    <Skeleton className="name" width={150} height={30} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                </div>
            </div>
            <div className="cards cards-4">
                <Skeleton className="flag" width={300} height={200} />
                <div className="cards-contents">
                    <Skeleton className="name" width={150} height={30} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                    <Skeleton width={200} />
                </div>
            </div>
        </div>
    );
}
