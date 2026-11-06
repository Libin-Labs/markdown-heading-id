import * as api from '@lp-labs/markdown-heading-id';
import { headingId } from '@lp-labs/markdown-heading-id';
console.log(headingId('Getting **Started**!'));
// @ts-expect-error invalid argument must be rejected by declarations
api.headingId(4);
