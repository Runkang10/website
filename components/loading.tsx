import { Skeleton } from "./ui/skeleton";

const DefaultLoading = () => {
  return (
    <div className="loading-container">
      <div className="loading" />
    </div>
  );
};

const SkeletonLoading = () => {
  return <Skeleton></Skeleton>;
};

export { DefaultLoading, SkeletonLoading };
