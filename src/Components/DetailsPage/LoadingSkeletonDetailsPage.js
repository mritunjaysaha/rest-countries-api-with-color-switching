import React from "react";
import Skeleton from "react-loading-skeleton";
export default function LoadingSkeletonDetailsPage() {
    return (
        <div className="loading-container">
            <div className="flag-skeleton">
                <Skeleton width={400} height={300} />
            </div>
            <div className="contents-skeleton">
                <Skeleton className="name" width={200} height={30} />
                <div className="contents-container-skeleton">
                    <div className="contents-left">
                        <p className="row">
                            <Skeleton width={200} height={20} />
                            &nbsp;&nbsp;
                            <Skeleton width={150} height={20} />
                        </p>
                        <p className="row">
                            <Skeleton width={200} height={20} />
                            &nbsp;&nbsp;
                            <Skeleton width={150} height={20} />
                        </p>
                        <p className="row">
                            <Skeleton width={200} height={20} />
                            &nbsp;&nbsp;
                            <Skeleton width={150} height={20} />
                        </p>
                        <p className="row">
                            <Skeleton width={200} height={20} />
                            &nbsp;&nbsp;
                            <Skeleton width={150} height={20} />
                        </p>
                    </div>
                    <div className="contents-right">
                        <p className="row">
                            <Skeleton width={200} height={20} />
                            &nbsp;&nbsp;
                            <Skeleton width={150} height={20} />
                        </p>{" "}
                        <p className="row">
                            <Skeleton width={200} height={20} />
                            &nbsp;&nbsp;
                            <Skeleton width={150} height={20} />
                        </p>{" "}
                        <p className="row">
                            <Skeleton width={200} height={20} />
                            &nbsp;&nbsp;
                            <Skeleton width={150} height={20} />
                        </p>
                    </div>
                </div>
                <div className="contents-border">
                    <Skeleton width={200} height={20} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="countries">
                        <Skeleton width={100} height={20} />{" "}
                        <Skeleton width={100} height={20} />{" "}
                        <Skeleton width={100} height={20} />{" "}
                        <Skeleton width={100} height={20} />
                    </span>
                </div>
            </div>
        </div>
    );
}
