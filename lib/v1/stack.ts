import { Stack, StackProps } from "aws-cdk-lib";
import { DockerImageCode, DockerImageFunction } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";

export class V1Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const func = new DockerImageFunction(this, "V1Function", {
      code: DockerImageCode.fromImageAsset("./services", {
        file: "Dockerfile",
      }),
    });

    const api = new RestApi(this, "V1ApiGateway", {
      deployOptions: {
        stageName: "dev",
      },
    });

    const resource = api.root.addResource("v1");
    resource.addProxy({
      defaultIntegration: new LambdaIntegration(func),
      anyMethod: true,
    });
  }
}