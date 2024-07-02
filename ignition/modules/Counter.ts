import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';


const CounterModule = buildModule('CounterModule', (moduleBuilder) => {
  const counterContract = moduleBuilder.contract('Counter',[]);
  return { counterContract };
});

export default CounterModule;
