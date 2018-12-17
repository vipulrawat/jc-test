import factorial from './sequencers/factorialSeq';
import fibonacci from './sequencers/fibonacciSeq';
import partialSum from './sequencers/partialSumSeq';
import prime from './sequencers/primeSeq';
import range from './sequencers/rangeSeq';

const invokeProto = {
  next() {
    return this.gen.next().value;
  }
};

const pipeProto = {
  invoke() {
    const invokeObject = Object.create(invokeProto, { gen: { writable: false, value: this.gen } });
    return invokeObject;
  },
};

const generatorPrototype = {
  next() {
    return this.gen.next().value;
  },
  pipeline() {
    const pipelineObject = Object.create(pipeProto, { gen: { writable: false, value: this.gen } });
    return pipelineObject;
  },
};

function generator(sequencer, ...args) {
  let gen;
  switch (sequencer) {
    case 'factorial':
      gen = factorial();
      break;
    case 'fibonacci':
      gen = fibonacci();
      break;
    case 'partialSum':
      gen = partialSum(...args);
      break;
    case 'range':
      gen = range(...args);
      break;
    case 'prime':
      gen = prime();
      break;
    default:
      gen = prime();
      break;
  }
  const generatorObject = Object.create(generatorPrototype, {
    gen: { writable: false, value: gen },
    seqSelected: { writable: false, value: sequencer }
  });
  return generatorObject;
}

export default generator;
