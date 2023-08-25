import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardLoading = () => {
  return (
    <Card width="300px">
      <Skeleton height="200px" borderRadius={10} overflow={"hidden"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardLoading;
