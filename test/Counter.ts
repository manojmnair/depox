//import { loadFixture, time } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { expect } from 'chai';
import hre from 'hardhat';

//import hre from 'hardhat';

describe('Counter', function () {
  let counterContractFactory, counterContract: any;
  beforeEach(async () => {
    counterContractFactory = await hre.ethers.getContractFactory('Counter');
    counterContract = await counterContractFactory.deploy();
  });

  it('Should set the start count to 0 by default', async function () {
    const startCount = 0; // Set your desired initial count
    expect(await counterContract.getCounter()).to.equal(startCount);
  });
  it('Should set the counter to value', async function () {
    const x = 10;
    await counterContract.setCounter(x);
    expect(await counterContract.getCounter()).to.equal(10);
  });
  it('Should increment the counter by 1', async function () {
    await counterContract.increment();
    expect(await counterContract.getCounter()).to.equal(1);
  });
  it('Should decrement the counter by 1', async function () {
    await counterContract.setCounter(5);
    await counterContract.decrement();
    expect(await counterContract.getCounter()).to.equal(4);
  });
  it('Should reset the counter to 0', async function () {
    await counterContract.resetCounter();
    expect(await counterContract.getCounter()).to.equal(0);
  });
});
