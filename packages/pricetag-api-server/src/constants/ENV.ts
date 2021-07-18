export const STAGE = process.env.STAGE;
// STAGE:             'dev' | 'stg' | 'v1' | 'v2' ...
// NORMALIZED_STAGE:  'dev' | 'stg' | 'prod'
export const NORMALIZED_STAGE: 'prod' | 'stg' | 'dev' = (() => {
  switch (STAGE) {
    case 'dev':
    case 'stg':
      return STAGE;
    default:
      return 'prod';
  }
})();
