import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardLoading = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardLoading;
