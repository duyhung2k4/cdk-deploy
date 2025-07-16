import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { V1Stack } from '../lib/v1/stack';
import { V2Stack } from '../lib/v2/stack';

const app = new cdk.App();

new V1Stack(app, 'V1Stack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new V2Stack(app, 'V2Stack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});