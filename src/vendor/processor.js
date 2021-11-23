class ClockProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

    process(inputs, outputs, parameters) {
        this.port.postMessage('Hello from the processor');
        return true;
    }
}

console.log('registering');

registerProcessor('clock-processor', ClockProcessor);
