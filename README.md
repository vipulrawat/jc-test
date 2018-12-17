# Steps
---
1. `yarn` or `npm install`
2. `yarn start` or `npm run start`

# Tests
---
  `yarn test`

# Design Desicion
---
I started with creating the generator function first as it contains the core business logic of the task. However, Initially I wrote less tests for these functions as they are pure mathematical functions the are infinite generators (expect partialSum).

## Backend

In Backend, the pure generators are kept in -sequencers and it is imported in `index.js`.
The main function in `index.js` is `function generator(gen, ...args)`, _gen_ is the string which is selected by switch statement and initialized to the proper sequencer. Default is taken as _prime_.

## Frontend

Frontend, includes the dropdown menu which lets to select the _sequencer_, to use is one has to click __Activate__ and then the __Next__ will generate the _values_.
If the _sequencer_ requires any argument then it enables the input tags where one can add arguments to the _sequencer_.
After, changing the arguments one has to click __Set__ and __Activate__ to use __Next__.
The error will be handled if any sequence throw error.

Current user flow is:

If sequencer is among _prime_, _factorial_, _fibonacci_.
__Select__ => __Activate__ => __Next__

For _range_ and _partialSum_.
__Select__ => __Activate__ => _(Change arguments)_ => __Set__ => __Activate__ => __Next__

# Limitations
---
- `factorial()` cannot generate large factorials as memory constraint of number.
- Didn't implemented the `accumulator()`.
- User flow is difficult.